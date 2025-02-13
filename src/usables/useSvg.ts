import type { SvgElementOpaque } from './useElement'
import { useLength } from './useLength'
import { useAttr } from './useAttr'
import { usePreserveAspectRatio } from './usePreserveAspectRatio'

export type Svg = ReturnType<typeof useSvg>

export function useSvg() {
  return {
    tag: 'svg' as 'svg',
    attributes: {
      width: useAttr(useLength()),
      height: useAttr(useLength()),
      viewBox: useAttr(useLength()),
      preserveAspectRatio: useAttr(usePreserveAspectRatio()),
    },
    children: [] as SvgElementOpaque[],
  }
}
