"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getNavbarItems } from "@/shared/metadata/navbar-items";
import LangSwitcher from "./LangSwitcher";
import { useTranslations } from "next-intl";
import Logo from "../../../public/images/logos/alexcan_dvlpr.webp";

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations("NavbarItems");

	const items = getNavbarItems(t);

	useEffect(() => {
		if (isOpen) {
			// Bloquear el scroll
			document.body.style.overflow = "hidden";
			// Guardar la posición actual del scroll
			document.body.style.position = "fixed";
			document.body.style.width = "100%";
			document.body.style.top = `-${window.scrollY}px`;
		} else {
			// Restaurar el scroll
			const scrollY = document.body.style.top;
			document.body.style.overflow = "";
			document.body.style.position = "";
			document.body.style.width = "";
			document.body.style.top = "";
			if (scrollY) {
				window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1);
			}
		}

		// Cleanup al desmontar el componente
		return () => {
			document.body.style.overflow = "";
			document.body.style.position = "";
			document.body.style.width = "";
			document.body.style.top = "";
		};
	}, [isOpen]);

	return (
		<div className="fixed inset-x-0 top-0 lg:hidden z-50 flex justify-center items-center">
			<nav className="w-[90%] flex justify-between items-center pt-4">
				<div className="bg-[#011627]/70 text-[#00c896] w-full h-16 flex flex-row items-center justify-between rounded-xl border border-transparent animated-border pulse-shadow px-4">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src={Logo || "/placeholder.svg"}
							alt="Logo Alexcan Dvlpr"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<h1 className="text-xl font-medium">Alex Cantón</h1>
					</Link>
					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className="p-2 text-[#00c896] hover:bg-[#011627]/60 rounded-lg transition-colors"
						aria-label="Abrir menú"
					>
						<Menu size={24} />
					</button>
					{isOpen ? (
						<div
							className="w-full h-screen fixed inset-0 top-0 bottom-0 bg-black/50 backdrop-blur-sm z-50"
							onClick={() => setIsOpen(false)}
						>
							<div
								className="absolute right-0 top-0 h-full w-[75%] bg-[#011627]/95 border-l border-[#00c896]/30 p-6"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="flex justify-end mb-8 pr-5">
									<button
										type="button"
										onClick={() => setIsOpen(false)}
										className="p-2 text-[#00c896] hover:text-white"
										aria-label="Cerrar menú"
									>
										<X size={24} />
									</button>
								</div>

								<div className="flex flex-col gap-8">
									<div className="flex flex-col gap-6">
										{items.map((item) => (
											<Link
												key={item.link}
												href={item.link}
												target={item.isExternal ? "_blank" : "_self"}
												onClick={() => setIsOpen(false)}
												className="text-xl font-semibold py-2 hover:text-white transition-colors"
											>
												{item.label}
											</Link>
										))}
									</div>
									<div className="flex justify-start mt-4">
										<LangSwitcher isMobile={true} />
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</nav>
		</div>
	);
};

export default MobileNavbar;
