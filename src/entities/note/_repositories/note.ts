import { dbClient } from "@/lib/db";
import { UserId } from "@/entities/user/_domain/types";
import {NoteEntity, NoteId, NotesEntity} from "@/entities/note/_domain/types";

export class NoteRepository {
    async getUserNotesById(userId: UserId) : Promise<NotesEntity> {
        return dbClient.note.findMany({
            where: {
                userId,
            },
        });
    }

    async getNoteById(noteId: NoteId) : Promise<NoteEntity> {
        return dbClient.note.findUniqueOrThrow({
            where: {
                id: noteId,
            },
        });
    }
}

export const noteRepository = new NoteRepository();