import createMDX from "@next/mdx";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,

  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: ["rehype-katex"],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
