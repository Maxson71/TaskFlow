"use client"
import React from "react";
import {ComposeChildren} from "@/lib/react";
import {AppSessionProvider} from "@/entities/user/app-session-provider";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/components/api/query-client";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
            <AppSessionProvider />
            <QueryClientProvider client={queryClient}/>
            {children}
        </ComposeChildren>
    );
}