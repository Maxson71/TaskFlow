"use client"
import React from "react";
import {ComposeChildren} from "@/lib/react";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>{children}</ComposeChildren>
    );
}