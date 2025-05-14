import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { MDXOwnComponents } from "@/mdx-components";

const LoadingComponent = () => <p>Loading...</p>;
const ErrorComponent = () => <p>Error...</p>;

const Post = ({ source }: {source: string}) => {
    return (
        <Suspense fallback={<LoadingComponent />}>
      <MDXRemote
        source={source}
        components={MDXOwnComponents}
        onError={ErrorComponent}
      />
    </Suspense>
    )
}

export default Post;