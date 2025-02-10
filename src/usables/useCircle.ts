import { usePlug } from './usePlug'

export function useCircle() {
  const cx = usePlug(new SVGAnimatedLength())
  const cy = usePlug(new SVGAnimatedLength())
  const r = usePlug(new SVGAnimatedLength())
  return { cx, cy, r }
}
