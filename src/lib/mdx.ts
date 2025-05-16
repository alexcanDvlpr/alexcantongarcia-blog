/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostMetadata } from "@/shared";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getUserLocale } from "./locale";

const root = process.cwd();
const postDir = path.join(root, "src/markdown/posts");

export const getFiles = async () => {
  const locale = await getUserLocale();
  return fs.readdirSync(path.join(postDir, locale), "utf-8");
}

export const getPostBySlug = async (slug: string) => {
  const locale = await getUserLocale();
  const mdxSource = fs.readFileSync(
    path.join(postDir, locale, `${slug}.mdx`),
    "utf-8"
  );
    
  const { content } = matter(mdxSource)
  return content;
}

export const getAllFileMetada = async () => {
    const files = await getFiles();
    const locale = await getUserLocale();

    return files.reduce((allPost: Array<any>, postSlug: string) => {
      const mdxSource = fs.readFileSync(
        path.join(postDir, locale, postSlug),
        "utf-8"
      )
  
      const { data } = matter(mdxSource)
  
      return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPost]
    }, []) 
}

export const getFileMetadataBySlug = async (slug: string): Promise<PostMetadata> => {
  const locale = await getUserLocale();
    const mdxSource = fs.readFileSync(
        path.join(postDir, locale, `${slug}.mdx`),
        "utf-8"
      )
  
      const { data } = matter(mdxSource)
  
      return { ...data, slug: slug.replace(".mdx", "") } as PostMetadata
}