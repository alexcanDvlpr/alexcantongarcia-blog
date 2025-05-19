import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
	text: string;
	href: string;
	className?: string;
	type?: "light" | "dark";
};

const Button = ({ text, href, className, type = "dark" }: ButtonProps) => {
	const darkClass = "text-xl flex items-center gap-1 bg-[#011627]/40 text-[#00c896] font-semibold rounded-xl lg:backdrop-blur-md border border-transparent animated-border pulse-shadow px-6 py-3";
	const lightClass = "text-xl flex items-center gap-1 text-[#00c896] font-semibold rounded-xl lg:backdrop-blur-md border border-transparent animated-border pulse-shadow px-6 py-3";
	return (
		<Link
			href={href}
			className={ className ? className : type === "light" ? lightClass : darkClass }
		>
			{ !className && <ArrowBigDownDash /> }
			{text}
		</Link>
	);
};

export default Button;
