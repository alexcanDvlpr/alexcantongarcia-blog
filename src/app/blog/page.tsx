import { getFiles } from "@/lib/mdx";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const BlogPage = async () => {
  const t = await getTranslations("BlogPage");
  const files = await getFiles();

  return (
    <div className="w-full">
      <h1 className="text-6xl uppercase">{t("title")}</h1>
      <ul>
          {files.map(file => (<li key={file}>
            <Link href={`/blog/${file.split(".")[0]}`} className="uppercase">{file.split(".")[0]}</Link>
          </li>))}
        </ul>
    </div>
  )
}

export default BlogPage;