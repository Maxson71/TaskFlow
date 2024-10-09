"use server";
import {getUserNotesService} from "@/entities/note/_services/get-user-notes-service";
import {getSessionServerStrictServer} from "@/entities/user/session.server";
import {z} from "zod";

const propsSchema = z.object({
    userId: z.string(),
});

const resultSchema = z.array(
    z.object({
        id: z.string(),
        title: z.string(),
        text: z.string(),
        createdAt: z.date(),
        tags: z.array(
            z.object({
                name: z.string(),
            })
        ).optional(), // Якщо теги не обов'язкові
        userId: z.string(),
    })
);

export const getUserNotesAction = async (
    props: { userId: string | undefined },
) => {
    const { userId } = propsSchema.parse(props);
    const session = await getSessionServerStrictServer();
    const sessionUserId = session.user.id;
    const notes = await getUserNotesService.exec({ userId: userId });
    console.log(notes);
    return resultSchema.parseAsync(notes)
}