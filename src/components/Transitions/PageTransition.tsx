"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

interface PageTransitionProps {
	children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Initial state - hidden
		gsap.set(container, {
			opacity: 0,
			y: 10,
		});

		// Fast animate in
		gsap.to(container, {
			opacity: 1,
			y: 0,
			duration: 0.25,
			ease: "power1.out",
			delay: 0.05,
		});

		return () => {
			gsap.killTweensOf(container);
		};
	}, [pathname]);

	return (
		<div ref={containerRef} className="min-h-screen">
			{children}
		</div>
	);
}
