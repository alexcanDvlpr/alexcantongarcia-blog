import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import("next").NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{ hostname: "plus.unsplash.com" },
			{ hostname: "images.unsplash.com" },
			{ hostname: "d1csarkz8obe9u.cloudfront.net" },
			{ hostname: "encrypted-tbn0.gstatic.com" },
			{ hostname: "marketplace.canva.com" },
			{ hostname: "cdn.kwork.com" },
		]
	},
	async rewrites() {
		return [
		{
			source: '/about-me',
			destination: '/quien-soy',
		},
		];
	},
};

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

export default withNextIntl(withMDX(nextConfig));
