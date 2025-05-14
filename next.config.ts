/* eslint-disable @typescript-eslint/no-explicit-any */
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm as any,
      remarkFrontmatter as any,
      remarkMdxFrontmatter
    ],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
