import { useLength } from './useLength'
import { useAttr } from './useAttr'

export type SvgEllipse = ReturnType<typeof useEllipse>

export function useEllipse() {
  return {
    tag: 'ellipse' as 'ellipse',
    attributes: {
      cx: useAttr(useLength()),
      cy: useAttr(useLength()),
      rx: useAttr(useLength()),
      ry: useAttr(useLength()),
    },
  }
}
