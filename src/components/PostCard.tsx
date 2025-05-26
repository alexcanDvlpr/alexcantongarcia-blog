import Link from "next/link";
import { PostMetadata } from "@/shared";
import Tags from "./Tags";
import Image from "next/image";
import { Heading } from "./blog/Heading";

type Props = {
    post: PostMetadata;
}

const PostCard = ({ post }: Props) => {

    return (
        <Link href={`/blog/${post.slug}`} className="flex-1 bg-[#011627]/80 rounded-lg group">
            <div className="overflow-hidden rounded-md">
                <Image
                    src={post.thumbnail}
                    alt={post.slug}
                    width={380}
                    height={213}
                    className="h-[213px] w-full object-cover mb-2 transition-transform duration-150 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="p-4 pt-1">
                <Heading level={4} className="text-xl">{post.title}</Heading>
                <div className="w-full flex flex-row justify-between items-center mt-2">
                    <Tags tags={post.tags} />
                    <span className="flex flex-row gap-1 items-center">
                        <img className="w-7 h-7 rounded-full" src={post.avatar} alt={post.author} />
                        <p>{post.author}</p>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default PostCard;