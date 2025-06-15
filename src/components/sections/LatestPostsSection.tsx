import { getTranslations } from "next-intl/server";
import { Heading } from "../blog/Heading";
import PostCard from "../PostCard";
import { getLastThreePosts } from "@/lib/mdx";

const LatestPostsSection = async () => {
    const t = await getTranslations("AboutPage");
    const posts = await getLastThreePosts();
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Heading level={2}>{t("latestsPosts")}</Heading>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {posts.map((post) => <PostCard key={post.slug} post={post} />)}
            </div>
        </section>
    )
}

export default LatestPostsSection;