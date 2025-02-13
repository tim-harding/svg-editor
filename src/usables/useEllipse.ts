import { useLength } from './useLength'

export type SvgEllipse = ReturnType<typeof useEllipse>

export function useEllipse() {
  return {
    tag: 'ellipse' as 'ellipse',
    attributes: {
      cx: useLength(),
      cy: useLength(),
      rx: useLength(),
      ry: useLength(),
    },
  }
}
