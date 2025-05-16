import { getUserLocale } from "@/lib/locale";
import { getRequestConfig } from "next-intl/server";

export type Locale = (typeof locales)[number];

export const locales = ["es", "en"] as const;
export const defaultLocale: Locale = "es";

export default getRequestConfig(async () => {
	const locale = (await getUserLocale()) ?? defaultLocale;

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
