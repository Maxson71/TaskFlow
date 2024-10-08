
import { UserId } from "../../user/_domain/types";
export type NoteId = string;

export type NoteEntity = {
    id: NoteId;
    title?: string;
    text: string;
    createdAt: Date | null;
    tags?: { name: string }[];
    userId: UserId;
};
