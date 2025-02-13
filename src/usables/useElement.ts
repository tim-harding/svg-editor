import { useCircle, type SvgCircle } from './useCircle'
import { useEllipse, type SvgEllipse } from './useEllipse'
import { useImage, type SvgImage } from './useImage'
import { useSvg, type Svg } from './useSvg'

export type SvgTag = SvgAttributes['is']
export type SvgAttributes = Svg | SvgEllipse | SvgCircle | SvgImage
export type SvgElement = {
  attributes: SvgAttributes
  children: SvgElement[]
}

export function useElement(attributes: SvgAttributes): SvgElement {
  return {
    attributes,
    children: [],
  }
}

export function useSvgProps(tag: SvgTag): SvgAttributes {
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
