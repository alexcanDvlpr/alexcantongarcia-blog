"use client";
import MobileNavbar from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import { useIsMobile } from "@/hooks/useIsMobile";

const Navbar = () => {
	const { isMobile: isMobileView, isLoading } = useIsMobile();

	if (isLoading) {
		return <div className="w-full h-16" />;
	}

	const element = isMobileView ? <MobileNavbar /> : <NavbarDesktop />;
	return element;
};

export default Navbar;
