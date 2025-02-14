import type { SvgElement } from './useElement'

export type SvgTree = {
  root: SvgElement
  children: SvgTree[]
}

export function useTree<T extends SvgElement>(root: T) {
  return {
    root,
    children: [] as SvgTree[],
  }
}
