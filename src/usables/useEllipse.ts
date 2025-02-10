import { usePlug } from './usePlug'

export function useCircle() {
  return {
    cx: usePlug(new SVGAnimatedLength()),
    cy: usePlug(new SVGAnimatedLength()),
    rx: usePlug(new SVGAnimatedLength()),
    ry: usePlug(new SVGAnimatedLength()),
  }
}
