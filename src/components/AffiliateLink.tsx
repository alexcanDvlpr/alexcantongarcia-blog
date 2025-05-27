import { ExternalLink } from "lucide-react"
import Link from "next/link"

type AffiliateLinkProps = {
    title: string
    link: string
}

const AffiliateLink = ({ title, link }: AffiliateLinkProps) => (
    <Link
        href={link}
        target="_blank"
        rel="noreferrer nofollow"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2 transition-colors"
    >
        {title}
        <ExternalLink />
    </Link>
);

export default AffiliateLink
