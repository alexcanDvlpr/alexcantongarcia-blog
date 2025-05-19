"use client";
import { setUserLocale } from "@/lib/locale";
import { startTransition, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { redirect, usePathname } from "next/navigation";
import { sleep } from "@/shared";
import type { Locale } from "@/i18n/request";

type LanguageType = {
	value: string;
	label: string;
	flag: string;
};

const LangSwitcher = ({ isMobile }: { isMobile?: boolean }) => {
	const t = useTranslations();
	const locale = useLocale();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const items: Array<LanguageType> = [
		{
			value: "es",
			label: t("es"),
			flag: "🇪🇸",
		},
		{
			value: "en",
			label: t("en"),
			flag: "🇺🇸",
		},
	];

	const currentLanguage =
		items.find((item) => item.value === locale) || items[0];

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

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const classByDeviceType = isMobile ? "-right-45" : "-right-4";

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Dropdown trigger button */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 text-sm font-medium rounded-md cursor-pointer transition-colors"
			>
				<span className="text-4xl transition-transform duration-100 ease-in-out hover:scale-110">
					{currentLanguage.flag}
				</span>
			</button>

			{/* Dropdown menu */}
			{isOpen && (
				<div
					className={`absolute ${classByDeviceType} mt-2 w-52 bg-[#011627] rounded-md shadow-lg py-1 border border-gray-200`}
				>
					{items.map((item) => (
						// biome-ignore lint/a11y/useButtonType: <explanation>
						<button
							key={item.value}
							onClick={() => onChange(item.value)}
							className="flex items-center cursor-pointer justify-between w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
						>
							<div className="flex items-center gap-2">
								<span className="text-2xl">{item.flag}</span>
								<span className="text-lg">{item.label}</span>
							</div>
							{locale === item.value && (
								// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default LangSwitcher;
