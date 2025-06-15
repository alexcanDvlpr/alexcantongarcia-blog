// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	if (pathname === "/quien-soy") {
		const locale = request.cookies.get("NEXT_ALEXCAN_LOCALE")?.value || "es";
		if (locale === "en") {
			return NextResponse.redirect(new URL("/about-me", request.url));
		}
	}

	if (pathname === "/about-me") {
		const locale = request.cookies.get("NEXT_ALEXCAN_LOCALE")?.value || "en";
		if (locale === "es") {
			return NextResponse.redirect(new URL("/quien-soy", request.url));
		}
	}

	return NextResponse.next();
}
