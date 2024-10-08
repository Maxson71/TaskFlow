import { LogoIcon } from "@/components/ui/logo-icon";
import Link from "next/link";

export function Logo() {
    return (
        <Link className="flex items-center space-x-2" href="/public">
            <LogoIcon className="h-6 w-6" />
            <span className="font-bold inline-block">TaskFlow</span>
        </Link>
    );
}