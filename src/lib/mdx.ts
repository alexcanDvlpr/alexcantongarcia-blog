/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostMetadata } from "@/shared";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();
const postDir = path.join(root, 'src/markdown/posts');

export const getFiles = () => fs.readdirSync(postDir, "utf-8");

export const getPostBySlug = (slug: string) => {
    const mdxSource = fs.readFileSync(
        path.join(postDir, `${slug}.mdx`),
        'utf-8'
      );
  
      const { content } = matter(mdxSource)
  
      return content;
}

export const getAllFileMetada = () => {
    const files = getFiles()

    return files.reduce((allPost: Array<any>, postSlug: string) => {
      const mdxSource = fs.readFileSync(
        path.join(postDir, postSlug),
        'utf-8'
      )
  
      const { data } = matter(mdxSource)
  
      return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPost]
    }, []) 
}

export const getFileMetadataBySlug = (slug: string): PostMetadata => {
    const mdxSource = fs.readFileSync(
        path.join(postDir, `${slug}.mdx`),
        'utf-8'
      )
  
      const { data } = matter(mdxSource)
  
      return { ...data, slug: slug.replace('.mdx', '') } as PostMetadata
}