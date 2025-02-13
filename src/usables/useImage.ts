import { useLength } from './useLength'
import { useAttr } from './useAttr'
import { usePreserveAspectRatio } from './usePreserveAspectRatio'
import { useUrl } from './useUrl'

export type SvgImage = ReturnType<typeof useImage>

export function useImage() {
  return {
    tag: 'image' as 'image',
    attributes: {
      x: useAttr(useLength()),
      y: useAttr(useLength()),
      width: useAttr(useLength()),
      height: useAttr(useLength()),
      preserveAspectRatio: useAttr(usePreserveAspectRatio()),
      href: useAttr(useUrl()),
    },
  }
}
