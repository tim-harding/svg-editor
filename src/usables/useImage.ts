import { useLength } from './useLength'
import { usePreserveAspectRatio } from './usePreserveAspectRatio'
import { useUrl } from './useUrl'

export type SvgImage = ReturnType<typeof useImage>

export function useImage() {
  return {
    tag: 'image' as 'image',
    attributes: {
      x: useLength(),
      y: useLength(),
      width: useLength(),
      height: useLength(),
      preserveAspectRatio: usePreserveAspectRatio(),
      href: useUrl(),
    },
  }
}
