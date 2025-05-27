import Image from "next/image";
import AlexAboutSectionImage from "../../../public/images/alex-about.webp";
import { Heading } from "../blog/Heading";
import { getTranslations } from "next-intl/server";

const AboutHeroSection = async () => {
    const t = await getTranslations("AboutPage.AboutHero");
    const startingDate = new Date("2017-10-15T00:00:00Z");
    const now = new Date();

    return (
        <div className="w-full h-auto lg:h-[70dvh]">
            <div className="w-full h-full max-w-4xl mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-7 lg:gap-12">
                <div className="w-10/12 lg:w-7/12">
                    <Heading level={1} className="text-[#00c896]">Alex Cantón</Heading>
                    <div className="w-20 h-1 bg-[#00c896] lg:mx-auto md:mx-0 mb-6"></div>
                    <p className="text-xl mt-2">{t("text1", { years: now.getFullYear() - startingDate.getFullYear() })}</p>
                    <p className="text-xl mt-2">{t("text2")}</p>
                </div>
                <div className="w-10/12 lg:w-5/12 relative aspect-square lg:aspect-[3/4] flex flex-row justify-end">
                    <Image
                        className="rounded-3xl backdrop-blur-md border border-transparent animated-border pulse-shadow object-cover object-top"
                        src={AlexAboutSectionImage}
                        alt="Alex"
                        fill
                        priority
                        sizes="(max-width: 1024px) 83vw, 41.66vw"
                    />
                </div>

            </div>
        </div>
    )
}

export default AboutHeroSection;