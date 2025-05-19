import { getTranslations } from "next-intl/server";
import LinkedInButton from "../LinkedInButton";
import Button from "../Button";

const HeroSection = async () => {
	const t = await getTranslations("HomePage");
	return (
		<div className="relative w-full flex flex-col justify-center items-center bg-[url('/images/developer-bg.webp')] bg-cover bg-center min-h-screen px-4">
			<div className="absolute inset-0 bg-black/60" />
			<div className="w-full flex flex-col justify-center items-center z-10 gap-12 text-center">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl lg:text-7xl uppercase font-semibold text-white">
						{t("HeroSection.title")}
					</h1>

					<div className="w-full text-gray-200 text-2xl font-semibold px-5">
						{t("HeroSection.subtitle")}
					</div>
				</div>

				<Button href="#aboutSection" text={t("HeroSection.showMore")} />
			</div>
		</div>
	);
};

export default HeroSection;
