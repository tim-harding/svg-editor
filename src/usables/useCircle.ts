import { useLength } from './useLength'
import { useAttr } from './useAttr'

export type SvgCircle = ReturnType<typeof useCircle>

export function useCircle() {
  return {
    tag: 'circle' as 'circle',
    attributes: {
      cx: useAttr(useLength()),
      cy: useAttr(useLength()),
      r: useAttr(useLength()),
    },
  }
}
