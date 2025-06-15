import { NextRequest, NextResponse } from "next/server";
import { locales } from "./i18n/request";

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	if (pathname === "/quien-soy") {
		const locale = request.cookies.get("NEXT_LOCALE")?.value || locales[1];
		if (locale === "en") {
			return NextResponse.redirect(new URL("/about-me", request.url));
		}
	}

    if (pathname === "/about-me") {
		const locale = request.cookies.get("NEXT_LOCALE")?.value || locales[0];
		if (locale === "es") {
			return NextResponse.redirect(new URL("/quien-soy", request.url));
		}
	}

	return NextResponse.next();
}