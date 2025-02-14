import { useCircle } from '@/usables/useCircle'
import { useEllipse } from '@/usables/useEllipse'
import { useSvg } from '@/usables/useSvg'
import { useTree, type SvgTree } from '@/usables/useTree'
import { defineStore } from 'pinia'
import { shallowReactive, shallowRef } from 'vue'

export const useSvgDocStore = defineStore('svg-doc', () => {
  const elements = shallowReactive([] as SvgTree[])
  const selection = shallowRef(null as SvgTree | null)
  const viewed = shallowRef(null as SvgTree | null)

  const circle = useTree(useCircle())
  circle.root.attributes.cx.explicit.magnitude.value = 10
  circle.root.attributes.cy.explicit.magnitude.value = 10
  circle.root.attributes.r.explicit.magnitude.value = 10
  elements.push(circle)

  const ellipse = useTree(useEllipse())
  ellipse.root.attributes.cx.explicit.magnitude.value = 50
  ellipse.root.attributes.cy.explicit.magnitude.value = 50
  ellipse.root.attributes.rx.explicit.magnitude.value = 50
  ellipse.root.attributes.ry.explicit.magnitude.value = 100
  elements.push(ellipse)

  const svg = useTree(useSvg())
  svg.children.push(circle)
  svg.children.push(ellipse)
  elements.push(svg)

  viewed.value = svg

  return { elements, selection, viewed }
})
