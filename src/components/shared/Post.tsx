import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { MDXOwnComponents } from "@/mdx-components";
import rehypeHighlight from "rehype-highlight";
import PostHeader from "../blog/PostHeader";
import { PostMetadata } from "@/shared";
import readingTime from "reading-time";
import PostSkeleton from "../blog/PostSkeleton";

const LoadingComponent = () => <PostSkeleton />;
const ErrorComponent = () => <p>Error...</p>;

const Post = ({ source, metadata }: { source: string; metadata: PostMetadata }) => {
	const stats = readingTime(source);
	return (
		<Suspense fallback={<LoadingComponent />}>
			<PostHeader metadata={{ ...metadata, stats }} />
			<div className="w-full h-auto flex flex-col gap-2">
				<MDXRemote
					source={source}
					components={MDXOwnComponents}
					onError={ErrorComponent}
					options={{
						mdxOptions: { rehypePlugins: [rehypeHighlight] },
					}}
				/>
			</div>
		</Suspense>
	);
};

export default Post;
