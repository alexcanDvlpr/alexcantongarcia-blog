import AboutMePage from "@/components/pages/AboutMePage";
import { getUserLocale } from "@/lib/locale";
import { getAboutSchemaData } from "@/shared/metadata/schemas/about-schema";
import { redirect } from "next/navigation";

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