"use client";
import { Locale } from "@/i18n/request";
import { setUserLocale } from "@/lib/locale";
import { startTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { redirect, usePathname } from "next/navigation";
import { sleep } from "@/shared";

const LangSwitcher = () => {
	const t = useTranslations();
	const locale = useLocale();
	const pathname = usePathname();

	const items = [
		{
			value: "es",
			label: t("es"),
		},
		{
			value: "en",
			label: t("en"),
		},
	];

	function onChange(value: string) {
		const locale = value as Locale;

		startTransition(async () => {
			setUserLocale(locale);
			if (pathname.includes("/blog/") && pathname.split("blog/").length > 1) {
				await sleep(250);
				redirect("/blog");
			}
		});
	}

	return (
		<div className="w-full">
			<select onChange={(e) => onChange(e.target.value)}>
				{items.map((item) => (
					<option
						key={item.value}
						className="flex cursor-default items-center px-3 py-2 text-base data-[highlighted]:bg-slate-100 text-slate-900"
						value={item.value}
						defaultValue={locale}
					>
						{item.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default LangSwitcher;
