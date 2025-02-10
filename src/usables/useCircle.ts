import { usePlug } from './usePlug'

export function useCircle() {
  return {
    cx: usePlug(new SVGAnimatedLength()),
    cy: usePlug(new SVGAnimatedLength()),
    r: usePlug(new SVGAnimatedLength()),
  }
}
