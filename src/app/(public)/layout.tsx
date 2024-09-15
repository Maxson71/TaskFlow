import { AppHeader } from "@/app/widgets/app-header/app-header";

export default async function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AppHeader variant={"public"}/>
            {children}
        </>
    );
}