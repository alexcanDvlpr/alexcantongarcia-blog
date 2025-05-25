import type { createTranslator, Messages } from "next-intl";

export type NavbarItemType = {
	label: string;
	link: string;
	isExternal: boolean;
};

export const getNavbarItems = (
	t: ReturnType<typeof createTranslator<Messages, any>>,
): Array<NavbarItemType> => [
	{ label: t("home"), link: t("routes.home"), isExternal: false },
	{ label: t("about"), link: t("routes.about"), isExternal: false },
	{ label: t("blog"), link: t("routes.blog"), isExternal: false },
	{ label: t("greetings"), link: t("routes.greetings"), isExternal: false },
];
