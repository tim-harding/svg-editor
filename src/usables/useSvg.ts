import type { SvgElement } from './useElement'
import { useLength } from './useLength'
import { usePreserveAspectRatio } from './usePreserveAspectRatio'

export type Svg = ReturnType<typeof useSvg>

export function useSvg() {
  return {
    tag: 'svg' as 'svg',
    attributes: {
      width: useLength(),
      height: useLength(),
      viewBox: useLength(),
      preserveAspectRatio: usePreserveAspectRatio(),
    },
    children: [] as SvgElement[],
  }
}
