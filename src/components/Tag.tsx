
type Props = {
    name: string;
}

type TAGS_COLORS = {
    [key: string]: {
        bg: string;
        text: string;
    }
}

const Tag = ({ name }: Props) => {
    const TAGS: TAGS_COLORS = {
        Git: { bg: 'rgba(241, 80, 47, .7)', text: "#fff" },
        GitHub: { bg: 'rgba(23, 21, 21, .7)', text: "#fff" },
        GitLab: { bg: 'rgba(226, 67, 41, .7)', text: "#fff" },
        HTML: { bg: 'rgba(227, 76, 38, .7)', text: "#fff" },
        CSS: { bg: 'rgba(38, 77, 228, .7)', text: "#fff" },
        JavaScript: { bg: 'rgba(240, 219, 79, .7)', text: "#fff" },
        Desarrollo: { bg: 'rgba(0, 0, 0, .7)', text: "#fff" },
        Testing: { bg: '#rgba(20, 189, 0, .7)', text: "#fff" },
        Personal: { bg: '#rgba(0, 3, 169, .7)', text: "#fff" },
        Nodejs: { bg: 'rgba(60, 135, 58, 1)', text: "#fff" },
        TypeScript: { bg: 'rgba(0, 122, 204, .7)', text: "#fff" },
    } as const;

    return (
        <span
            className="rounded-xl px-3 py-1 text-xs"
            style={{ background: TAGS[name].bg, color: TAGS[name].text }}
        >
            {name}
        </span>
    )
}

export default Tag;