import fs from "fs";
import path from "path";

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params;
    const { default: Post } = await import(`@/markdown/posts/${slug}.mdx`)
   
    return <Post />
  }
   
  export function generateStaticParams() {
    const postsDir = path.join(process.cwd(), 'src/markdown/posts')
    const files = fs.readdirSync(postsDir);
    return files.map((file) => ({
      slug: file.split(".")[0]
    }));
  }
   
  export const dynamicParams = false