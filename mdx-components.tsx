/**
 * https://nextjs.org/docs/canary/app/building-your-application/configuring/mdx#add-an-mdx-componentstsx-file
 */
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
