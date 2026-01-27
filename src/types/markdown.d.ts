declare module "*.md" {
    import { ComponentType } from "react";

    export const attributes: {
        qna?: Array<{
            question: string;
            answer: string;
        }>;
        [key: string]: unknown;
    };

    export const react: ComponentType;
}
