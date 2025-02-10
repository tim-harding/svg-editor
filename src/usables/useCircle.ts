import type { Length } from '@/misc/types'
import { usePlug } from './usePlug'

export function useCircle() {
  const cx = usePlug(new SVGLength() as Length)
  const cy = usePlug(new SVGLength() as Length)
  const r = usePlug(new SVGLength() as Length)
  return { cx, cy, r }
}
