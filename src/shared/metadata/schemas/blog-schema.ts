import { domain, PostMetadata } from "@/shared";

export const getPostSchemaData = (metadata: PostMetadata) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    image: metadata.thumbnail,
    author: {
        "@type": "Person",
        name: metadata.author
    },
    datePublished: metadata.date,
    dateModified: metadata.date,
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${domain}/blog/${metadata.lang}/${metadata.slug}`
    },
    publisher: {
        "@type": "Organization",
        name: "Alex Cantón García",
        logo: {
            "@type": "ImageObject",
            url: "https://res.cloudinary.com/debuxubhj/image/upload/v1748453560/alexcan_dvlpr_sejjz6.webp"
        }
    }
});