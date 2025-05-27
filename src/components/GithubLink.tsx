import Link from "next/link";
import Image from "next/image";

type GithubLinkProps = {
    link: string;
    title: string;
};

const GithubLink = ({ link, title }: GithubLinkProps) => {
    return (
        <div className="w-full flex justify-center">
            <Link href={link} target="_blank"
                rel="noreferrer"
                className="w-[95%] flex flex-row items-center gap-4 bg-gray-100 border border-black rounded-full p-4 mb-8 transition hover:shadow-md sm:flex-col sm:justify-center sm:text-center">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        width={60}
                        height={60}
                        className="object-cover"
                    />
                </div>
                <span className="text-gray-800 font-bold text-base px-2 py-1">
                    {title}
                </span>
            </Link>
        </div>
    );
};

export default GithubLink;
