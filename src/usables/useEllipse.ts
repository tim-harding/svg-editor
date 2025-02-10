import type { Length } from '@/misc/types'
import { usePlug } from './usePlug'

export function useCircle() {
  const cx = usePlug(new SVGLength() as Length)
  const cy = usePlug(new SVGLength() as Length)
  const rx = usePlug(new SVGLength() as Length)
  const ry = usePlug(new SVGLength() as Length)
  return { cx, cy, rx, ry }
}
