import AboutMePage from "@/components/pages/AboutMePage";
import { getUserLocale } from "@/lib/locale";
import { domain } from "@/shared";
import { getAboutSchemaData } from "@/shared/metadata/schemas/about-schema";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Metadata.About");
	return {
		title: `${t("title")} | Alex Cantón García`,
		description: t("description"),
		keywords: [t("keyword1"), t("keyword2"), t("keyword3"), t("keyword4"), t("keyword5"), t("keyword6")],

		alternates: {
			canonical: `${domain}/quien-soy`,
			languages: {
				"es": `${domain}/quien-soy`,
				"en": `${domain}/quien-soy`,
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

		metadataBase: new URL(`${domain}/quien-soy`),
	};
}

const AboutMePageEs = async () => {
    const locale = await getUserLocale();
    if (locale === "en") {
        redirect('/about-me')
    }

    return <>
        <AboutMePage />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutSchemaData(locale)) }}
        />
    </>
}

export default AboutMePageEs;