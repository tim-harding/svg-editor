import type { ComputedRef } from 'vue'
import { useCircle, type SvgCircle } from './useCircle'
import { useEllipse, type SvgEllipse } from './useEllipse'
import { useImage, type SvgImage } from './useImage'
import { useSvg, type Svg } from './useSvg'

export type SvgElementTagged = Svg | SvgEllipse | SvgImage | SvgCircle
export type SvgTag = SvgElementTagged['tag']
export type SvgAttribute = {
  asAttribute: ComputedRef<string>
}
export type SvgElement = {
  tag: SvgTag
  attributes: Record<string, SvgAttribute>
  children?: SvgElement[]
}

export function useSvgTag(tag: SvgTag): SvgElementTagged {
  switch (tag) {
    case 'svg':
      return useSvg()
    case 'circle':
      return useCircle()
    case 'ellipse':
      return useEllipse()
    case 'image':
      return useImage()
  }
}
