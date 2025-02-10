import { usePlug } from './usePlug'

export function useImage() {
  const x = usePlug(new SVGAnimatedLength())
  const y = usePlug(new SVGAnimatedLength())
  const width = usePlug(new SVGAnimatedLength())
  const height = usePlug(new SVGAnimatedLength())
  const preserveAspectRatio = usePlug(new SVGAnimatedPreserveAspectRatio())
  const href = usePlug(new URL(''))
  return { x, y, width, height, preserveAspectRatio, href }
}
