import { useLength } from './useLength'
import { useAttr } from './useAttr'
import { usePreserveAspectRatio } from './usePreserveAspectRatio'
import { useViewBox } from './useViewBox'

export type Svg = ReturnType<typeof useSvg>

export function useSvg() {
  return {
    tag: 'svg' as 'svg',
    attributes: {
      width: useAttr(useLength()),
      height: useAttr(useLength()),
      viewBox: useAttr(useViewBox()),
      preserveAspectRatio: useAttr(usePreserveAspectRatio()),
    },
  }
}
