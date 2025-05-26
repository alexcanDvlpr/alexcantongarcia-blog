import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { MDXOwnComponents } from "@/mdx-components";
import rehypeHighlight from "rehype-highlight";
import PostHeader from "../blog/PostHeader";
import { PostMetadata } from "@/shared";
import readingTime from "reading-time";

const LoadingComponent = () => <p>Loading...</p>;
const ErrorComponent = () => <p>Error...</p>;

const Post = ({ source, metadata }: { source: string; metadata: PostMetadata }) => {
	const stats = readingTime(source);
	return (
		<Suspense fallback={<LoadingComponent />}>
			<PostHeader metadata={{...metadata, stats}} />
			<MDXRemote
				source={source}
				components={MDXOwnComponents}
				onError={ErrorComponent}
				options={{
					mdxOptions: { rehypePlugins: [rehypeHighlight] },
				}}
			/>
		</Suspense>
	);
};

export default Post;
