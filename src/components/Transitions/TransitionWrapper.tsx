"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

interface TransitionWrapperProps {
	children: React.ReactNode;
}

export default function TransitionWrapper({
	children,
}: TransitionWrapperProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		const container = containerRef.current;

		if (!container) return;

		// Only apply transitions to blog routes
		if (!pathname.startsWith("/blog")) {
			gsap.set(container, { opacity: 1, y: 0 });
			return;
		}

		setIsTransitioning(true);

		const tl = gsap.timeline({
			onComplete: () => setIsTransitioning(false),
		});

		// Fast transition sequence
		tl.set(container, { opacity: 0, y: 15 }).to(container, {
			opacity: 1,
			y: 0,
			duration: 0.6,
			ease: "power2.out",
		});

		return () => {
			tl.kill();
		};
	}, [pathname]);

	return (
		<div ref={containerRef} style={{ opacity: 0 }}>
			{children}
		</div>
	);
}
