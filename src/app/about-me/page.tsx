import AboutMePage from "@/components/pages/AboutMePage";
import { getUserLocale } from "@/lib/locale";
import { getAboutSchemaData } from "@/shared/metadata/schemas/about-schema";
import { redirect } from "next/navigation";

const AboutMePageEn = async () => {
    const locale = await getUserLocale();
    if (locale === "es") {
        redirect('/quien-soy')
    }

    return <>
        <AboutMePage />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(getAboutSchemaData(locale)) }}
        />
    </>
}

export default AboutMePageEn;