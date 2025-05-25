import Image from "next/image";
import { getTranslations } from "next-intl/server";
import MadridImage from "../../../public/images/madrid.webp"
import { Heading } from "@/components/blog/Heading";
import AboutHeroSection from "@/components/sections/AboutHeroSection";

const AboutMePage = async () => {
    const t = await getTranslations("AboutPage");

    return (
        <div className="w-full min-h-screen py-30 flex flex-col justify-start items-center bg-gray-900 text-white">
            <AboutHeroSection />
            <div className="max-w-4xl">
                <Heading level={2}>{t("title")}</Heading>

                <div className="w-full flex flex-col justify-start items-center gap-5 mt-4">
                    <p className="text-lg">{t("text1")}</p>
                    <figure className="text-center">
                        <Image src={MadridImage} alt="Soy Alex Canton y vivo en Madrid y soy del Real Madrid" className="rounded-2xl" width={590} height={350} />
                        <figcaption className="mt-2 text-sm text-gray-300">
                            {t("images.alt1")}
                        </figcaption>
                    </figure>
                    <p className="text-lg">{t.rich("text2", {
                        strong: (chunks) => <strong className="font-semibold underline">{chunks}</strong>,
                    })}</p>
                    <p className="text-lg">{t("text3")}</p>
                    <p className="text-lg">{t("text4")}</p>
                </div>

            </div>
        </div>
    )
}

/*

{t.rich("text2", {
        strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
      })}

*/

export default AboutMePage;