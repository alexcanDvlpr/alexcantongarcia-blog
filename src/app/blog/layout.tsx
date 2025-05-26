import { ReactNode } from "react";

export default function BlogMdxLayout({ children }: { children: ReactNode }) {
	return (
		<div className="w-full min-h-screen py-24 lg:py-30 flex flex-col justify-start items-center bg-gray-900 text-white relative">
			{/* Grid Background */}
			<div className="absolute inset-0 opacity-65">
				<div className="h-full w-full bg-grid-pattern bg-[length:40px_40px]"></div>
			</div>
			<div className="w-full z-20">{children}</div>
		</div>
	);
}
