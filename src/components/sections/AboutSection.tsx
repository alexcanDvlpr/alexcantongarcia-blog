import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const AboutSection = async () => {
	const t = await getTranslations("HomePage");
	return (
		<section className="w-full h-[80vh] lg:h-[70vh] bg-white">
			<div className="container h-full mx-auto px-4 py-28 lg:py-5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
				<div className="w-full md:w-1/3 flex justify-center md:justify-end">
					<div className="relative w-52 h-52 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
						<Image
							src="https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Foto de perfil"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				<div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
					<h2 className="text-3xl md:text-4xl font-bold text-[#00c896]">{t("AboutSection.title")}</h2>
					<div className="w-20 h-1 bg-[#00c896] mx-auto md:mx-0"></div>
					<p className="text-lg text-gray-600">
						{t("AboutSection.text")}
					</p>
					<p className="text-lg text-gray-600">
						{t("AboutSection.text1")}
					</p>
					<p className="text-lg text-gray-600">
						{t("AboutSection.text2")}
					</p>
					
					<Link href="/about" className="text-[#00c896] text-lg hover:underline font-semibold">{t("AboutSection.showMore")}</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
