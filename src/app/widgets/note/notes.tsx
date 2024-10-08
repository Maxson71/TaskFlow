"use client";
import { Note } from "./_ui/note";
import { useAppSession } from "@/entities/user/_vm/use-app-session";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton } from "@/functional/auth/sign-in-button";
import {useQuery} from "@tanstack/react-query";
import {getUserNotesByIdQuery} from "@/entities/note/_queries";

export function Notes() {
  const session = useAppSession();
  const user = session?.data?.user;

  if (session.status === "loading") {
    return <Skeleton className="w-8 h-8 rounded-full" />;
  }

  if (session.status === "unauthenticated") {
    return <SignInButton />;
  }

  const notesQuery = useQuery({
    ...getUserNotesByIdQuery(user?.id),
  })

  if (notesQuery.isPending) {
    return <Skeleton className="w-8 h-8 rounded-full" />;
  }

  if (!notesQuery.data) {
    return <p>Немає інформації</p>;
  }

  if (notesQuery.data === 0) {
    return <p>У вас поки немає нотаток</p>;
  }

  return (
      <div className="space-y-4">
        {notesQuery.data.map((note) => (
            <Note key={note.id} note={note} />
        ))}
      </div>
  );
}
