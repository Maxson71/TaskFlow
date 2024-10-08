"use server";
import {getUserNotesService} from "@/entities/note/_services/get-user-notes";
import {getSessionServerStrictServer} from "@/entities/user/session.server";

const propsShema = z.object({
    userId: z.string(),
});

const resultShema = z.object({
    notes: z.array(z.object({
        id: z.string(),
        title: z.string(),
        content: z.string(),
    })),
});

export const getUserNotesAction = async (
   props: z.infer<typeof propsShema>,
) => {
    const { userId } = propsShema.parse(props);
    const session = await getSessionServerStrictServer();
    const sessionUserId = session.data.user.id;
    const notes =  getUserNotesService.exec({ sessionUserId });

    return resultShema.parseAsync(notes)
}