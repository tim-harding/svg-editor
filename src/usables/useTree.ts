import { ref, type Ref } from 'vue'
import type { SvgElement } from './useElement'

export type SvgTree = {
  root: SvgElement
  position: Ref<{ x: number; y: number }>
  inputs: SvgTree[]
}

export function useTree<T extends SvgElement>(root: T) {
  return {
    root,
    position: ref({ x: 0, y: 0 }),
    inputs: [] as SvgTree[],
  }
}
