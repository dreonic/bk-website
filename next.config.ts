import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    turbopack: {
        rules: {
            "*.md": {
                loaders: ["frontmatter-markdown-loader"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
