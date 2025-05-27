import { ReactNode } from "react";
import { Linkedin } from "lucide-react";
import type { createTranslator, Messages } from "next-intl";

export type NavbarItemType = {
	label: string | ReactNode;
	link: string;
	isExternal: boolean;
};

export const getNavbarItems = (
	t: ReturnType<typeof createTranslator<Messages, any>>,
): Array<NavbarItemType> => [
	{ label: t("home"), link: t("routes.home"), isExternal: false },
	{ label: t("about"), link: t("routes.about"), isExternal: false },
	{ label: t("blog"), link: t("routes.blog"), isExternal: false },
	{ label: <Linkedin />, link: "https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa/", isExternal: true },
];
