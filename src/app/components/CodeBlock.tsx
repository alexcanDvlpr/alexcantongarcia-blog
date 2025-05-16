import React, { ReactNode } from "react";

interface Props {
	name: string;
	children: ReactNode;
}

function CodeBlock({ name, children }: Props) {
	return (
		<div className="border">
			<h3 className="border-b p-3 font-mono">{name}</h3>
			<div className="p-3">{children}</div>
		</div>
	);
}

export default CodeBlock;
