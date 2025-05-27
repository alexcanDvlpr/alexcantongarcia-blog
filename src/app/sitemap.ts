import { locales } from "@/i18n/request";
import { getAllFileMetada } from "@/lib/mdx";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const domain = "https://alexcantongarcia.es";

	const blogUrls = await Promise.all(
		locales.flatMap(async (locale) => {
			const data = await getAllFileMetada(locale);
			return data.map((url) => ({
				url: `${domain}/blog/${url.lang}/${url.slug}`,
				lastModified: new Date(),
				changeFrequency: "monthly" as const,
				priority: 0.7,
			}));
		}),
	);

	return [
		{
			url: `${domain}/`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1,
		},
		{
			url: `${domain}/quien-soy`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.5,
		},
		{
			url: `${domain}/about-me`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.5,
		},
		{
			url: `${domain}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		...blogUrls.flat(),
	];
}
