import { useCircle, type SvgCircle } from './useCircle'
import { useEllipse, type SvgEllipse } from './useEllipse'
import { useImage, type SvgImage } from './useImage'
import { useSvg, type Svg } from './useSvg'

export type SvgTag = SvgProps['is']
export type SvgProps = Svg | SvgEllipse | SvgCircle | SvgImage
export type SvgElement = SvgProps & { children: SvgElement[] }

export function useElement(tag: SvgTag): SvgElement {
  return {
    children: [],
    ...useSvgProps(tag),
  }
}

export function useSvgProps(tag: SvgTag): SvgProps {
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
