import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Post from "@/components/shared/Post";
import { getFileMetadataBySlug, getPostBySlug } from "@/lib/mdx";
import { locales } from "@/i18n/request";
import { domain, PostMetadata } from "@/shared";
import { getPostSchemaData } from "@/shared/metadata/schemas/blog-schema";

interface Props {
	params: Promise<{ slug: string; locale: string; }>;
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const { content: post, data: metadata } = await getPostBySlug(slug);
	return (
		<>
			<div className="max-w-4xl mx-auto min-h-screen px-4 md:px-7 lg:px-0">
				<Post source={post} metadata={metadata as PostMetadata} />
			</div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(getPostSchemaData(metadata as PostMetadata)) }}
			/>
		</>
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
	const { slug, locale } = await params;

	const metadata = await getFileMetadataBySlug(slug, locale);

	return {
		title: `▷ ${metadata.title} | Alex Cantón García`,
		description: metadata.description,

		alternates: {
			canonical: `${domain}/blog/${locale}/${metadata.slug}`,
			languages: {
				"es": `${domain}/blog/${locale}/${metadata.slug}`,
				"en": `${domain}/blog/${locale}/${metadata.slug}`,
			},
		},
		authors: [{ name: metadata.author }],
		creator: metadata.author,
		category: metadata.tags.join(", "),
		publisher: metadata.author,

		twitter: {
			card: "summary_large_image",
			title: `▷ ${metadata.title} | Alex Cantón García`,
			description: metadata.description,
			site: "Alex Cantón garcía",
			creator: "@alexcanDvlpr",
		},

		robots: {
			index: true,
			follow: true,
			nocache: false,
		},

		metadataBase: new URL(`${domain}/blog/${locale}/${metadata.slug}`),
	};
}

export const dynamicParams = false;
