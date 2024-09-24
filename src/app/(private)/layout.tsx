import { AppHeader } from "@/app/widgets/app-header/app-header";
import {NodesBlock} from "@/app/widgets/nodes/nodes-block";

export default async function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AppHeader variant={"private"}/>
            {children}
            <NodesBlock/>
        </>
    );
}