import React from "react";
import { getColorForTag } from "./_vm/get-tag-color";
import {cn} from "@/lib/utils";

export function Tag({ text }: { text: string }) {
    const { color, bgColor } = getColorForTag(text);

    return (
        <div
            className={"inline-flex items-center.5 py-1 rounded-full "}
            style={{ backgroundColor: bgColor }}
        >
            <p className={cn(
                "text-xs font-semibold",
            )}
               style={{ color: color }}
            >
                {text}
            </p>
        </div>
    );
}
