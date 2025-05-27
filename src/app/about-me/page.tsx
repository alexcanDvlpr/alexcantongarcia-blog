import AboutMePage from "@/components/pages/AboutMePage";
import { getUserLocale } from "@/lib/locale";
import { redirect } from "next/navigation";

const AboutMePageEn = async () => {
    const locale = await getUserLocale();
    if (locale === "es") {
        redirect('/quien-soy')
    }

    return <AboutMePage />
}

export default AboutMePageEn;