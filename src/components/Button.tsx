import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
	text: string;
	href: string;
};

const Button = ({ text, href }: ButtonProps) => {
	return (
		<Link
			href={href}
			className="text-xl flex items-center gap-1 bg-[#011627]/40 text-[#00c896] font-semibold rounded-xl lg:backdrop-blur-md border border-transparent animated-border pulse-shadow px-6 py-3"
		>
			<ArrowBigDownDash />
			{text}
		</Link>
	);
};

export default Button;
