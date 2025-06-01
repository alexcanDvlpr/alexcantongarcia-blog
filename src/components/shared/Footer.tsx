import { getLastThreePosts } from "@/lib/mdx"
import ContainerBackground from "./ContainerBackground";
import Link from "next/link";
import { getUserLocale } from "@/lib/locale";
import { createPostLink } from "@/shared";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
    const posts = await getLastThreePosts();
    const locale = await getUserLocale();
    const t = await getTranslations("Footer");

    return (
        <footer className="bg-gray-950 text-gray-300 px-4 py-10 pt-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Contacto */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">{t("contact")}</h3>
                    <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Alex Cantón García</p>
                    <p className="text-lg mb-4">{t("rights")}</p>
                    <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</Link>
                    </div>
                </div>

                {/* Últimos posts */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">{t("lastPosts")}</h3>
                    <ul className="space-y-2">
                        {posts.map((post, index) => (
                            <li key={index}>
                                <Link href={createPostLink(locale, post.slug)} className="text-lg hover:underline hover:text-white transition">
                                    {post.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sobre mí */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">{t("about.title")}</h3>
                    <p className="text-lg text-gray-400">{t("about.text")}</p>
                </div>
            </div>

            {/* Sección Legal */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-lg text-gray-400 text-center space-x-10">
                <Link href="/cookies" className="hover:text-white transition">{t("link.cookies")}</Link>
                <Link href="/privacidad" className="hover:text-white transition">{t("link.privacy")}</Link>
            </div>
        </footer>
    )
}

export default Footer;