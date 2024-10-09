"use client";
import { Note } from "./_ui/note";
import { useAppSession } from "@/entities/user/_vm/use-app-session";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton } from "@/functional/auth/sign-in-button";
import { useQuery } from "@tanstack/react-query";
import { getUserNotesByIdQuery } from "@/entities/note/_queries";
import { NoteEntity } from "@/entities/note/_domain/types";

export function Notes() {
  const session = useAppSession();
  const user = session?.data?.user;

  // Викликаємо useQuery завжди, але контролюємо його виконання через `enabled`
  const notesQuery = useQuery({
    ...getUserNotesByIdQuery(user ? user.id : ""),
    enabled: !!user, // Виконується лише, якщо є користувач
  });

  if (session.status === "loading") {
    return <Skeleton className="w-96 h-8 bg-gray-200 rounded-lg" />;
  }

  if (session.status === "unauthenticated") {
    return <SignInButton />;
  }

  if (notesQuery.isLoading) {
    return <Skeleton className="w-96 h-8 bg-gray-200 rounded-lg" />;
  }

  if (!notesQuery.data || notesQuery.data.length === 0) {
    console.log(notesQuery.data);
    return <p>У вас поки немає нотаток</p>;
  }

  return (
      <div className="space-y-4">
        {notesQuery.data.map((note: NoteEntity) => (
            <Note key={note.id} note={note} />
        ))}
      </div>
  );
}
