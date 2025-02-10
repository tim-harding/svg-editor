import { usePlug } from './usePlug'

export function useImage() {
  return {
    x: usePlug(new SVGAnimatedLength()),
    y: usePlug(new SVGAnimatedLength()),
    width: usePlug(new SVGAnimatedLength()),
    height: usePlug(new SVGAnimatedLength()),
    preserveAspectRatio: usePlug(new SVGAnimatedPreserveAspectRatio()),
    href: usePlug(new URL('')),
  }
}
