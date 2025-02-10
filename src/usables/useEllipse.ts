import { useLength } from './useLength'

export type SvgEllipse = ReturnType<typeof useEllipse>

export function useEllipse() {
  return {
    is: 'ellipse' as 'ellipse',
    cx: useLength(),
    cy: useLength(),
    rx: useLength(),
    ry: useLength(),
  }
}
