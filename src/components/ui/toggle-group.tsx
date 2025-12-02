"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ToggleGroupProps {
    items: string[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({
    items,
    value,
    onChange,
    className,
}) => {
    return (
        <div
            className={cn(
                "flex flex-wrap gap-2 sm:gap-3 justify-center",
                className
            )}
        >
            {items.map((item) => (
                <button
                    key={item}
                    onClick={() => onChange(item)}
                    className={cn(
                        "px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer",
                        "border border-primary-brown",
                        value === item
                            ? "bg-primary-brown text-white"
                            : "bg-transparent text-primary-brown hover:bg-primary-brown/10"
                    )}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export { ToggleGroup };
