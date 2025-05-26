import { PostMetadata } from "@/shared";
import Image from "next/image";
import Tags from "../Tags";
import { Heading } from "./Heading";
import { Clock8 } from "lucide-react";
import { getTranslations } from "next-intl/server";

type Props = {
    metadata: PostMetadata & { stats: any }
}

const PostHeader = async ({ metadata }: Props) => {
    const t = await getTranslations("BlogPage");
    const minutes = Math.ceil(metadata.stats.minutes);
    return (
        <div className="w-full h-[50vh] flex flex-col justify-center items-center relative overflow-hidden mb-10">
            <Image src={metadata.thumbnail} alt={metadata.title} fill priority className="object-cover" />
            <div className="w-full flex flex-col justify-start items-start absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md rounded-t-lg">
                <Heading level={1} className="!text-5xl px-3">{metadata.title}</Heading>
                <div className="w-full flex flex-row justify-between items-center px-4 py-2">
                    <Tags tags={metadata.tags} />
                    <span className="flex flex-row gap-1 items-center text-white">
                        <img className="w-7 h-7 rounded-full" src={metadata.avatar} alt={metadata.author} />
                        <p>{metadata.author}</p>
                    </span>
                </div>
                <span className="w-full flex flex-row gap-1 justify-end items-center text-white px-3 pb-1">
                    <Clock8 className="w-4 h-4" /> {t("timeToRead", { minutes })}
                </span>
            </div>
        </div>
    )
}

export default PostHeader;
