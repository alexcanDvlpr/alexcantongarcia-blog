import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import AlexImage from "../../../public/images/alex-image1.webp";
import { Heading } from "../blog/Heading";

const AboutSection = async () => {
	const t = await getTranslations("HomePage");
	return (
		<section className="w-full min-h-[65vh] sm:min-h-[80vh] md:min-h-[40vh] lg:min-h-[50vh] bg-white flex flex-col items-center justify-center">
			<span id="aboutSection"></span>
			<div className="container mx-auto px-4 py-20 sm:py-15 lg:py-5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
				<div className="w-full md:w-1/3 flex justify-center md:justify-end">
					<div className="relative w-52 h-52 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
						<Image
							src={AlexImage}
							alt="Foto de perfil"
							fill
							className="object-cover object-left"
							priority
						/>
					</div>
				</div>

				<div className="w-full md:w-2/3 max-w-lg space-y-4 text-center md:text-left">
					<Heading className="text-2xl sm:text-3xl md:text-4xl !font-bold text-[#00c896]" level={2}>{t("AboutSection.title")}</Heading>
					<div className="w-20 h-1 bg-[#00c896] mx-auto md:mx-0"></div>
					<p className="text-base sm:text-lg text-gray-600">{t("AboutSection.text")}</p>
					<p className="text-base sm:text-lg text-gray-600">{t("AboutSection.text1")}</p>
					<p className="text-base sm:text-lg text-gray-600">{t("AboutSection.text2")}</p>

					<Link href={t("routes.about")} className="text-[#00c896] text-base sm:text-lg hover:underline font-semibold">
						{t("AboutSection.showMore")}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
