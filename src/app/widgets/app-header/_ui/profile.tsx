"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {useAppSession} from "@/entities/session/use-app-session";
import {Skeleton} from "@/components/ui/skeleton";
import {SignInButton} from "@/functional/auth/sign-in-button";
import {useSignOut} from "@/functional/auth/use-sign-out";

export function Profile() {
    const session = useAppSession();
    const { signOut, isPending: isLoadingSignOut } = useSignOut();

    if (session.status === "loading") {
        return <Skeleton className="w-8 h-8 rounded-full" />;
    }

    if (session.status === "unauthenticated") {
        return <SignInButton />;
    }

    const user = session?.data?.user;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="p-px rounded-full self-center h-8 w-8"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.image} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2 ">
                <DropdownMenuLabel>
                    <p>Мій аккаунт</p>
                    <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
                        {user?.name}
                    </p>
                </DropdownMenuLabel>
                <DropdownMenuGroup></DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href={`/profile/`}>
                            <User className="mr-2 h-4 w-4" />
                            <span>Профіль</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        disabled={isLoadingSignOut}
                        onClick={() => signOut()}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Вихід</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}