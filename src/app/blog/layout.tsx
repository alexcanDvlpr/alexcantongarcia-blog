import ContainerBackground from "@/components/shared/ContainerBackground";
import { domain } from "@/shared";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Metadata.Blog");
	return {
		title: `${t("title")} | Alex Cantón García`,
		description: t("description"),
		keywords: [t("keyword1"), t("keyword2"), t("keyword3"), t("keyword4"), t("keyword5"), t("keyword6")],

		alternates: {
			canonical: `${domain}/blog`,
			languages: {
				"es": `${domain}/blog`,
				"en": `${domain}/blog`,
			},
		},

		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			site: "Alex Cantón garcía",
			creator: "@alexcanDvlpr",
		},

		robots: {
			index: true,
			follow: true,
			nocache: false,
		},

		metadataBase: new URL(`${domain}/blog`),
	};
}

export default function BlogMdxLayout({ children }: { children: ReactNode }) {
	return (
		<ContainerBackground>
			{/* Grid Background */}
			<div className="absolute inset-0 opacity-65">
				<div className="h-full w-full bg-grid-pattern bg-[length:40px_40px]"></div>
			</div>
			<div className="w-full z-20">{children}</div>
		</ContainerBackground>
	);
}
