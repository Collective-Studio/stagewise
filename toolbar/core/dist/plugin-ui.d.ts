import { ButtonHTMLAttributes } from 'preact/compat';
import { ClassProp } from 'class-variance-authority/types';
import { ComponentChildren } from 'preact';
import { JSX } from 'preact';
import { PromptRequest } from '@stagewise/extension-toolbar-srpc-contract';
import { useCallback } from 'preact/hooks';
import { useEffect } from 'preact/hooks';
import { useMemo } from 'preact/hooks';
import { useRef } from 'preact/hooks';
import { useState } from 'preact/hooks';
import { VariantProps } from 'class-variance-authority';

export declare function Badge({ children, color, style, className }: BadgeProps): JSX.Element;

declare interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: ComponentChildren;
    className?: string;
}

declare const badgeVariants: (props?: {
    color?: "blue" | "green" | "red" | "yellow" | "purple" | "orange" | "pink";
    style?: "default" | "outline";
} & ClassProp) => string;

export declare function Button({ children, style, size, asChild, ...props }: ButtonProps): JSX.Element;

declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ComponentChildren;
    style?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export declare function Panel({ children, alwaysFullHeight, }: {
    children: ComponentChildren;
    alwaysFullHeight?: boolean;
}): JSX.Element;

export declare namespace Panel {
    var Header: ({ title, description, }: {
        title?: string;
        description?: string;
    }) => JSX.Element;
    var Content: ({ children, }: {
        children: ComponentChildren;
    }) => JSX.Element;
    var Footer: ({ children, }: {
        children: ComponentChildren;
    }) => JSX.Element;
}

export declare interface ToolbarContext {
    sendPrompt: (prompt: string | PromptRequest) => void;
}

export { useCallback }

export { useEffect }

export { useMemo }

export { useRef }

export { useState }

export declare const useToolbar: () => ToolbarContext;


export * from "preact";

export { }
