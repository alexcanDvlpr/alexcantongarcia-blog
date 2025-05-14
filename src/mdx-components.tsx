/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'
import CodeBlock from './app/components/CodeBlock'
import MyComponent from './app/components/MyComponent'

export const MDXOwnComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl font-semibold">{children}</h1>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-lg">{children}</p>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <div className="bg-black rounded-2xl p-2"><pre>{children}</pre></div>
  ),
  CodeBlock: (props: any) => <CodeBlock {...props} />,
  MyComponent: () => <MyComponent />
}
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDXOwnComponents,
    ...components,
  }
}