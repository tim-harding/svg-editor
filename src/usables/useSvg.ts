import { useLength } from './useLength'
import { usePreserveAspectRatio } from './usePreserveAspectRatio'

export type Svg = ReturnType<typeof useSvg>

export function useSvg() {
  return {
    is: 'svg' as 'svg',
    width: useLength(),
    height: useLength(),
    viewBox: useLength(),
    preserveAspectRatio: usePreserveAspectRatio(),
  }
}
