import { getUserLocale } from "@/lib/locale";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  const locale = await getUserLocale()
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-4xl">{t('title')}</h1>
      <h1 className="text-6xl">{locale === "es" ? "🇪🇸" : "🇺🇸"}</h1>
    </div>
  );
}
