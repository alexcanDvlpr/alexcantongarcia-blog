import Link from "next/link";
import { Linkedin } from "lucide-react";

const LinkedInButton = () => {
	return (
		<Link
			href=""
			className="flex bg-[#011627]/40 text-[#00c896] rounded-xl lg:backdrop-blur-md border border-transparent animated-border pulse-shadow px-3 py-1"
		>
			<Linkedin className="text-white w-8 h-8" />
		</Link>
	);
};

export default LinkedInButton;
