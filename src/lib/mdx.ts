/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostMetadata } from "@/shared";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getUserLocale } from "./locale";

const root = process.cwd();
const postDir = path.join(root, "src/markdown/posts");

export const getFiles = async (locale?: "es" | "en") => {
	const selectedLocale = locale === undefined ? await getUserLocale() : locale;
	return fs.readdirSync(path.join(postDir, selectedLocale), "utf-8");
};

export const getPostBySlug = async (slug: string) => {
	const locale = await getUserLocale();
	const mdxSource = fs.readFileSync(
		path.join(postDir, locale, `${slug}.mdx`),
		"utf-8",
	);

	const { content, data } = matter(mdxSource);
	return { content, data };
};

export const getAllFileMetada = async (locale?: "en" | "es") => {
	const files = await getFiles(locale);
	const selectedLocale = locale === undefined ? await getUserLocale() : locale;

	return files.reduce((allPost: Array<any>, postSlug: string) => {
		const mdxSource = fs.readFileSync(
			path.join(postDir, selectedLocale, postSlug),
			"utf-8",
		);

		const { data } = matter(mdxSource);

		return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPost];
	}, []);
};

export const getAllFileSortedByDate = async () => {
	const data = await getAllFileMetada();
	return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const getFileMetadataBySlug = async (
	slug: string,
	locale?: string
): Promise<PostMetadata> => {
	const selectedLocale = locale === undefined
		? await getUserLocale()
		: locale;

	const mdxSource = fs.readFileSync(
		path.join(postDir, selectedLocale, `${slug}.mdx`),
		"utf-8",
	);

	const { data } = matter(mdxSource);

	return { ...data, slug: slug.replace(".mdx", "") } as PostMetadata;
};

export const getLastThreePosts = async () => {
	const filesSortedByDate = await getAllFileSortedByDate();
	return filesSortedByDate.slice(0, 3);
}