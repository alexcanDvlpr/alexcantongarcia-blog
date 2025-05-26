import Tag from "./Tag";

type Props = {
    tags: Array<string>;
}

const Tags = ({ tags }: Props) => (
    <span className="flex flex-row flex-wrap gap-1">{tags.map(tag => <Tag key={tag} name={tag} />)}</span>
)

export default Tags;