import { useLength } from './useLength'

export type SvgCircle = ReturnType<typeof useCircle>

export function useCircle() {
  return {
    tag: 'circle' as 'circle',
    attributes: {
      cx: useLength(),
      cy: useLength(),
      r: useLength(),
    },
  }
}
