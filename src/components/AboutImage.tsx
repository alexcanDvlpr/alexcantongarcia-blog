"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import AlexAboutSectionImage from "../../public/images/alex-about.webp";
import { useTranslations } from "next-intl";

const AboutImage = () => {
    const t = useTranslations("AboutPage.AboutHero");

    const cardRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = () => {
        if (!innerRef.current) return;
        gsap.to(innerRef.current, {
            scale: 1.15,
            rotateZ: 1.3,
            duration: 0.1,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        if (!innerRef.current) return;
        gsap.to(innerRef.current, {
            scale: 1,
            rotateZ: 0,
            duration: 0.3,
            ease: "power3.out",
        });
    };

    useEffect(() => {
        if (innerRef.current) {
            gsap.set(innerRef.current, { transformOrigin: "center center" });
        }
    }, []);

    return (
        <div className="relative" ref={cardRef}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}>
            <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl rotate-6"></div>
                <div className="relative bg-slate-800 rounded-2xl p-6 shadow-2xl" ref={innerRef}>
                    <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <Image
                            className="rounded-3xl backdrop-blur-md border border-transparent animated-border pulse-shadow object-cover object-top"
                            src={AlexAboutSectionImage}
                            alt="Alex"
                            fill
                            priority
                            sizes="(max-width: 1024px) 83vw, 41.66vw"
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-1 items-center justify-center">
                        <p className="text-slate-300 text-sm">{t("developer")}</p>
                        <p className="text-emerald-400 text-xs">Madrid, España</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutImage;