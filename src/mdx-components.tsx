/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import CodeBlock from "./components/CodeBlock";
import MyComponent from "./components/MyComponent";
import { Heading } from "./components/blog/Heading";

export const MDXOwnComponents = {
	h1: ({ children }: { children: ReactNode }) => (
		<Heading level={1}>{children}</Heading>
	),
	h2: ({ children }: { children: ReactNode }) => (
		<Heading level={2}>{children}</Heading>
	),
	h3: ({ children }: { children: ReactNode }) => (
		<Heading level={3}>{children}</Heading>
	),
	h4: ({ children }: { children: ReactNode }) => (
		<Heading level={4}>{children}</Heading>
	),
	h5: ({ children }: { children: ReactNode }) => (
		<Heading level={5}>{children}</Heading>
	),
	h6: ({ children }: { children: ReactNode }) => (
		<Heading level={6}>{children}</Heading>
	),
	a: (props: any) => (
		<a className="text-blue-700 underline" {...props}>
			{props.children}
		</a>
	),
	p: ({ children }: { children: ReactNode }) => (
		<p className="text-lg">{children}</p>
	),
	pre: ({ children }: { children: ReactNode }) => (
		<div className="bg-black rounded-2xl p-2">
			<pre>{children}</pre>
		</div>
	),
	ul: (props: any) => (
		<ul {...props} className="list-disc pl-7">
			{props.children}
		</ul>
	),
	ol: (props: any) => (
		<ol {...props} className="list-decimal pl-7">
			{props.children}
		</ol>
	),
	blockquote: (props: any) => (
		<blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
			{props.children}
		</blockquote>
	),
	img: (props: any) => (
		<div className="w-full flex justify-center items-center m-2">
			<img className="w-1/2 rounded-lg" {...props} />
		</div>
	),
	CodeBlock: (props: any) => <CodeBlock {...props} />,
	MyComponent: () => <MyComponent />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...MDXOwnComponents,
		...components,
	};
}
