import {UserId} from "@/entities/user/_domain/types";
import {getUserNotesAction} from "@/entities/note/_actions/get-user-notes-action";

const baseKey = 'note';

export const getUserNotesByIdQuery = (userId: UserId | undefined) => ({
    queryKey: [baseKey, "getNotesById", userId],
    queryFn:  () => getUserNotesAction({userId}),
})