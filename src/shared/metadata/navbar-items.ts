import type { createTranslator, Messages } from "next-intl";

export type NavbarItemType = {
	label: string;
	link: string;
	isExternal: boolean;
};

export const getNavbarItems = (
	t: ReturnType<typeof createTranslator<Messages, any>>,
): Array<NavbarItemType> => [
	{ label: t("home"), link: "/", isExternal: false },
	{ label: t("about"), link: "/about", isExternal: false },
	{ label: t("blog"), link: "/blog", isExternal: false },
	{ label: t("greetings"), link: "/12312", isExternal: false },
];
