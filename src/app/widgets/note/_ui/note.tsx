"use client";
import {Tag} from "@/app/widgets/tag/tag";
import {FiFileText} from "react-icons/fi";

interface Note {
    id: string;
    title: string;
    text: string;
    dateCreated: string;
    tags: { name: string }[];
}

export function Note({ note }: { note: Note }) {
    return (
        <div className="flex justify-center content-center">
            <div
                className="inline-flex flex-col space-y-2.5 items-start justify-start px-4 py-3.5 bg-white shadow border rounded-lg border-gray-200">
                <div className="inline-flex space-x-2.5 items-center justify-between w-full">
                    <div className="flex space-x-1.5 items-center justify-start">
                        <div
                            className="flex items-center justify-center w-5 h-full px-0.5 py-0.5 bg-black bg-opacity-0">
                            <FiFileText/>
                        </div>
                        <p className="text-xs text-gray-400">{new Date(note.dateCreated).toLocaleDateString()}</p>
                    </div>
                    <div className="w-5 h-1 bg-gray-600 rounded-full"/>
                </div>
                <div className="flex flex-col space-y-1 items-start justify-start">
                    <p className="w-full text-sm font-semibold text-gray-600">{note.title}</p>
                    <p className="w-full text-xs font-medium text-gray-400">{note.text}</p>
                </div>
                <div className="inline-flex space-x-2 items-start justify-start">
                    {note.tags.map((tag) => (
                        <Tag key={tag.name} text={tag.name}/>
                    ))}
                </div>
            </div>
        </div>
    );
}