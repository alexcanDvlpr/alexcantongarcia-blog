import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Post from "@/components/shared/Post";
import { getFileMetadataBySlug, getPostBySlug } from "@/lib/mdx";
import { locales } from "@/i18n/request";
import { PostMetadata } from "@/shared";

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const { content: post, data: metadata } = await getPostBySlug(slug);
	return (
		<div className="max-w-4xl mx-auto min-h-screen px-4 md:px-7 lg:px-0">
			<Post source={post} metadata={metadata as PostMetadata} />
		</div>
	)
}

export function generateStaticParams() {
	const allParams = locales.flatMap((locale) => {
		const postsDir = path.join(process.cwd(), "src/markdown/posts", locale);
		const files = fs.readdirSync(postsDir);

		return files.map((file) => ({
			locale,
			slug: file.replace(/\.mdx?$/, ""),
		}));
	});

	return allParams;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	const metadata = await getFileMetadataBySlug(slug);

	return {
		title: metadata.title,
		description: metadata.description,
		authors: [{ name: metadata.author }],
		creator: metadata.author,
		category: metadata.tags.join(", "),
		publisher: metadata.author,
	};
}

export const dynamicParams = false;
