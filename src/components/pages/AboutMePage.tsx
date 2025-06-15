import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Coffee, MapPin } from "lucide-react";
import { Heading } from "@/components/blog/Heading";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AlexImage from "../../../public/images/alex-image1.webp"
import LatestPostsSection from "../sections/LatestPostsSection";

const AboutMePage = async () => {
    const t = await getTranslations("AboutPage");

    return (
        <div className="w-full min-h-screen py-24 lg:py-30 flex flex-col justify-start items-center bg-gray-900 text-white relative">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-65">
                <div className="h-full w-full bg-grid-pattern bg-[length:40px_40px]"></div>
            </div>
            <span className="z-10">
                <AboutHeroSection />
                <section className="py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <Heading level={2}>{t("title")}</Heading>
                                <p className="text-slate-300 leading-relaxed">{t("text1")}</p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div className="bg-slate-800/50 border-slate-700">
                                        <div className="p-6">
                                            <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-4">
                                                <div className="text-center space-y-2">
                                                    <MapPin className="h-8 w-8 text-emerald-400 mx-auto" />
                                                    <p className="text-slate-300">Madrid, España</p>
                                                    <p className="text-slate-400 text-sm">{t("images.alt1")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-slate-300 leading-relaxed">{t.rich("text2", {
                                            strong: (chunks) => <strong className="font-semibold underline">{chunks}</strong>,
                                        })}</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-slate-800/50 border-slate-700">
                                        <div className="p-6">
                                            <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-4 relative">
                                                <div className="text-center space-y-2 overflow-hidden">
                                                    <figure className="text-center">
                                                        <Image src={AlexImage} alt="Este soy yo disimulando que me gustan las buenas prácticas" className="rounded-2xl w-full h-full object-cover" fill />
                                                        <figcaption className="mt-2 text-sm text-gray-300">
                                                            {t("images.alt2")}
                                                        </figcaption>
                                                    </figure>
                                                    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-slate-800/60 flex flex-col items-center justify-center">
                                                        <Coffee className="h-8 w-8 text-emerald-400 mx-auto" />
                                                        <p className="text-slate-300">{t("programming")}</p>
                                                        <p className="text-slate-400 text-sm"> {t("images.alt2")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-slate-300 leading-relaxed">{t("text3")}</p>
                                        <p className="text-slate-300 leading-relaxed">{t("text4")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <LatestPostsSection />
            </span>
        </div>
    )
}

export default AboutMePage;