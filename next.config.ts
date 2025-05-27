import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import { hostname } from "os";

/** @type {import("next").NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{ hostname: "res.cloudinary.com" },
			{ hostname: "cdn-icons-png.flaticon.com" },
			{ hostname: "plus.unsplash.com" },
			{ hostname: "images.unsplash.com" },
			{ hostname: "d1csarkz8obe9u.cloudfront.net" },
			{ hostname: "encrypted-tbn0.gstatic.com" },
			{ hostname: "marketplace.canva.com" },
			{ hostname: "cdn.kwork.com" },
		]
	}
};

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

export default withNextIntl(withMDX(nextConfig));
