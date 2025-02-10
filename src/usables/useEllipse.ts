import { usePlug } from './usePlug'

export function useCircle() {
  const cx = usePlug(new SVGAnimatedLength())
  const cy = usePlug(new SVGAnimatedLength())
  const rx = usePlug(new SVGAnimatedLength())
  const ry = usePlug(new SVGAnimatedLength())
  return { cx, cy, rx, ry }
}
