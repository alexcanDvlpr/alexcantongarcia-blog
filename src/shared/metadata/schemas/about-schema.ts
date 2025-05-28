import { domain } from "@/shared";

export const getAboutSchemaData = (locale: string = "es") => {
    const jobTitle = locale === "es"
        ? "Desarrollador Web Fullstack en Typescript y Python"
        : "Fullstack web developer with Typescript and Python";

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Alex Cantón",
        url: `${domain}/${locale === "es" ? "quien-soy" : "about-me"}`,
        image: "https://res.cloudinary.com/debuxubhj/image/upload/v1748453505/alex-about_ciyspx.webp",
        sameAs: [
            "https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa/",
            "https://github.com/alexcanDvlpr",
            "https://www.youtube.com/@alexcanDvlpr"
        ],
        jobTitle,
        worksFor: {
            "@type": "Organization",
            name: "Alex Cantón García"
        }
    }
}