import { useLength } from './useLength'
import { usePlug } from './usePlug'
import { usePreserveAspectRatio } from './usePreserveAspectRatio'

export type SvgImage = ReturnType<typeof useImage>

export function useImage() {
  return {
    is: 'image' as 'image',
    x: useLength(),
    y: useLength(),
    width: useLength(),
    height: useLength(),
    preserveAspectRatio: usePreserveAspectRatio(),
    href: usePlug(new URL('')),
  }
}
