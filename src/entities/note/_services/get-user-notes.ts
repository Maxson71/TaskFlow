import {UserId} from "@/entities/user/_domain/types";
import {noteRepository} from "@/entities/note/_repositories/note";
import {NoteEntity} from "@/entities/note/_domain/types";

type GetNotes = {
    userId: UserId;
}

export class getUserNotes {
    async exec({userId}: GetNotes): Promise<NoteEntity> {
        return await noteRepository.getUserNotesById(userId);
    }
}

export const getUserNotesService = new getUserNotes();