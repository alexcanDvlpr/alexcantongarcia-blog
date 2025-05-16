import { getUserLocale } from "@/lib/locale";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home() {
	const t = await getTranslations("HomePage");
	const locale = await getUserLocale();

	return (
		<div className="w-full min-h-screen flex flex-col justify-center items-center gap-3">
			<h1 className="text-4xl">{t("title")}</h1>
			<h1 className="text-6xl">{locale === "es" ? "🇪🇸" : "🇺🇸"}</h1>
			<Link className="text-7xl" href="/blog">
				Blog
			</Link>
		</div>
	);
}
