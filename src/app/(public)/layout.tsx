import { AppHeader } from "@/app/widgets/app-header/app-header";
import { NoteBlock } from "@/app/widgets/note/note-block";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant={"public"} />
      {children}
      <NoteBlock />
    </>
  );
}
