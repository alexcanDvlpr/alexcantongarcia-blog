import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import "prism-themes/themes/prism-darcula.css";
import "highlight.js/styles/vs2015.min.css";
import Navbar from "@/components/shared/Navbar";

const instrument_Sans = Instrument_Sans({
	variable: "--font-instrument-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Alex Cantón | Desarrollo web con TypeScript",
	description:
		"Mi nombre es Alex Cantón y soy desarrollador web desde el 2017 en Madrid, España. Esta es mi web junto con mi blog en la que quiero compartir conocimiento, enseñar nuevas tecnologías y enseñar JavaScript desde 0 para gente que este estudiando o se este abriendo camino en el mundo laboral.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	return (
		<html className="scroll-smooth" lang={locale}>
			<body>
				<NextIntlClientProvider>
					<Navbar />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
