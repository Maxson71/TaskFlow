"use client";
import { Note } from "./_ui/note";
import { useAppSession } from "@/entities/user/_vm/use-app-session";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton } from "@/functional/auth/sign-in-button";

export function NoteBlock() {
    const session = useAppSession();

    if (session.status === "loading") {
        return <Skeleton className="w-8 h-8 rounded-full" />;
    }

    if (session.status === "unauthenticated") {
        return <SignInButton />;
    }

    const user = session?.data?.user;

    if (user?.note == null) {
        return <p>У вас поки немає нотаток</p>;
    }

    return (
        <div className="space-y-4">
            {user?.note.map((note) => (
                <Note key={note.id} note={note}/>
            ))}
        </div>
    );
}
