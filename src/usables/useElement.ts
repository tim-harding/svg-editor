import { useCircle, type SvgCircle } from './useCircle'
import { useEllipse, type SvgEllipse } from './useEllipse'
import { useImage, type SvgImage } from './useImage'
import { useSvg, type Svg } from './useSvg'

export type SvgElement = Svg | SvgEllipse | SvgImage | SvgCircle
export type SvgTag = SvgElement['tag']
export type SvgTree = {
  root: SvgElement
  children: SvgTree[]
}

export function useTree<T extends SvgElement>(root: T) {
  return {
    root,
    children: [] as SvgTree[],
  }
}

export function useElement(tag: SvgTag): SvgElement {
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
