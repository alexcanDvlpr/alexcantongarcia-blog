import { PropsWithChildren } from "react"

type Props = {
    className?: string;
    as?: "div" | "footer" | "span";
}

const ContainerBackground = ({ children, className, as = "div" }: PropsWithChildren<Props>) => {
    const cssClass = className ?? "w-full min-h-screen py-24 lg:py-30 flex flex-col justify-start items-center";
    const Tag = as;
    return (
        <Tag className={`bg-gray-900 text-white ${cssClass} relative`}>
            {/* Grid Background */}
			<div className="absolute inset-0 opacity-65">
				<div className="h-full w-full bg-grid-pattern bg-[length:40px_40px]"></div>
			</div>
            {children}
        </Tag>
    )
}

export default ContainerBackground;