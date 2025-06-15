import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Linkedin } from "lucide-react";
import AboutImage from "../AboutImage";

const AboutHeroSection = async () => {
    const t = await getTranslations("AboutPage.AboutHero");
    const startingDate = new Date("2017-10-15T00:00:00Z");
    const now = new Date();

    return (
        <section className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    Alex Cantón
                                </h1>
                                <div className="text-xl text-emerald-400 font-medium">
                                    Full Stack Developer
                                </div>
                            </div>
                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">{t("text1", { years: now.getFullYear() - startingDate.getFullYear() })}</p>
                            <p className="text-slate-400 leading-relaxed max-w-xl">{t("text2")}</p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3">
                                <Link target="_blank" href="https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa/" className="flex flex-row gap-1">
                                    {t("contact")}
                                    <Linkedin className="h-5 w-5 ml-2" />
                                </Link>
                            </div>
                            <div className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                                <Link href="/blog" className="flex flex-row gap-1">
                                    {t("blog")}
                                    <ArrowRight className="h-5 w-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <AboutImage />
                </div>
            </div>
        </section>
    )
}

export default AboutHeroSection;