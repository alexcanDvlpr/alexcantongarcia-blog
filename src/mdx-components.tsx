import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

export const MDXOwnComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-3xl font-semibold">{children}</h1>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-lg">{children}</p>
  ),
}
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDXOwnComponents,
    ...components,
  }
}