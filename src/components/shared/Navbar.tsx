"use client";
import MobileNavbar from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import { useIsMobile } from "@/hooks/useIsMobile";

const Navbar = () => {
	const isMobileView = useIsMobile();
	const element = isMobileView ? <MobileNavbar /> : <NavbarDesktop />;

	return element;
};

export default Navbar;
