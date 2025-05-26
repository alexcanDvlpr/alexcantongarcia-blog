import { getTranslations } from "next-intl/server";
import { Heading } from "@/components/blog/Heading";
import PostCard from "@/components/PostCard";
import { getAllFileSortedByDate } from "@/lib/mdx";

const BlogPage = async () => {
	const t = await getTranslations("BlogPage");
	const files = await getAllFileSortedByDate();

	return (
		<div className="w-full flex flex-col justify-center items-center gap-10 px-4 lg:px-0">
			<div className="w-full lg:w-3/4 flex flex-col gap-2">
				<Heading level={1} className="text-6xl uppercase">{t("title")}</Heading>
				<p className="text-lg">{t("text")}</p>
			</div>
			<div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-4">
				{files.map((file) => <PostCard key={file.slug} post={file} />)}
			</div>
		</div>
	);
};

export default BlogPage;
