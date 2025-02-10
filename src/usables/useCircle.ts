import { useLength } from './useLength'

export type SvgCircle = ReturnType<typeof useCircle>

export function useCircle() {
  return {
    is: 'circle' as 'circle',
    cx: useLength(),
    cy: useLength(),
    r: useLength(),
  }
}
