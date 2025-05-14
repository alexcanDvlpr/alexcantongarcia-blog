import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Post from "@/app/components/Post";
import { getFileMetadataBySlug, getPostBySlug } from "@/lib/mdx";

interface Props {
    params: Promise<{ slug: string }>
}

export default async function Page({
    params,
  }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    return (
        <Post source={post} />
      )
  }

  export function generateStaticParams() {
    const postsDir = path.join(process.cwd(), 'src/markdown/posts')
    const files = fs.readdirSync(postsDir);
    return files.map((file) => ({
      slug: file.split(".")[0]
    }));
  }

  export async function generateMetadata(
    { params }: Props
  ): Promise<Metadata> {
    const { slug } = await params
   
    const metadata = getFileMetadataBySlug(slug);
   
    return {
      title: metadata.title,
      description: metadata.description,
      authors: [{ name: metadata.author }],
        creator: metadata.author,
        category: metadata.tags.join(", "),
        publisher: metadata.author,
    }
  }
   
  export const dynamicParams = false