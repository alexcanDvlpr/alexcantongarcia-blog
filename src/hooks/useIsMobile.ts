import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};

		mql.addEventListener("change", onChange);

		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		setIsLoading(false);

		return () => {
			mql.removeEventListener("change", onChange);
			setIsLoading(false);
		};
	}, [MOBILE_BREAKPOINT]);

	return { isMobile: !!isMobile, isLoading };
}
