import { usePlug } from './usePlug'

export function useSvg() {
  return {
    width: usePlug(new SVGAnimatedLength()),
    height: usePlug(new SVGAnimatedLength()),
    viewBox: usePlug(new SVGAnimatedNumberList()),
    preserveAspectRatio: usePlug(new SVGAnimatedPreserveAspectRatio()),
  }
}
