"use client";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";
import { getNavbarItems } from "@/shared/metadata/navbar-items";
import type { NavbarItemType } from "@/shared/metadata/navbar-items";
import Image from "next/image";
import Logo from "../../../public/images/logos/alexcan_dvlpr.webp";
import { useTranslations } from "next-intl";

const NavbarDesktop = () => {
	const t = useTranslations("NavbarItems");

	const items = getNavbarItems(t);

	return (
		<div className="w-full flex flex-row justify-center items-center pt-6 fixed top-0 left-0 right-0 z-50">
			<div className="bg-[#011627]/40 text-[#00c896] w-3/4 xl:w-1/2 h-16 flex flex-row items-center justify-between rounded-xl backdrop-blur-md border border-transparent animated-border pulse-shadow px-4">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src={Logo}
						alt="Logo Alexcan Dvlpr"
						width={44}
						height={44}
						className="rounded-full"
					/>
					<h1 className="text-2xl font-medium">Alex Cantón</h1>
				</Link>
				<div className="flex-1 flex flex-row items-center justify-end gap-5">
					<div className="w-full flex flex-row items-center justify-end gap-10">
						{items.map((item) => (
							<NavbarItem item={item} key={item.link} />
						))}
					</div>
					<LangSwitcher />
				</div>
			</div>
		</div>
	);
};

const NavbarItem = ({ item }: { item: NavbarItemType }) => (
	<Link
		href={item.link}
		target={item.isExternal ? "_blank" : "_self"}
		key={item.link}
		className="z-10 hover:underline text-lg font-semibold"
	>
		{item.label}
	</Link>
);

export default NavbarDesktop;
