import type { Metadata } from "next";
import { Instrument_Sans, Montserrat, PT_Sans } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import "prism-themes/themes/prism-darcula.css";
import "highlight.js/styles/vs2015.min.css";
import Navbar from "@/components/shared/Navbar";
import { domain } from "@/shared";
import Footer from "@/components/shared/Footer";


const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Metadata");
	return {
		title: `${t("title")} | Alex Cantón García`,
		description: t("description"),
		keywords: [t("keyword1"), t("keyword2"), t("keyword3"), t("keyword4"), t("keyword5"), t("keyword6")],

		alternates: {
			canonical: domain,
			languages: {
				"es": domain,
				"en": domain,
			},
		},

		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			site: "Alex Cantón garcía",
			creator: "@alexcanDvlpr",
		},

		robots: {
			index: true,
			follow: true,
			nocache: false,
		},

		metadataBase: new URL(domain),
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	return (
		<html className="scroll-smooth" lang={locale}>
			<body className={montserrat.className}>
				<NextIntlClientProvider>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
