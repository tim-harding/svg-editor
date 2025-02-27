import { useCircle } from '@/usables/useCircle'
import { useEllipse } from '@/usables/useEllipse'
import { useSvg } from '@/usables/useSvg'
import { useTree, type SvgTree } from '@/usables/useTree'
import { defineStore } from 'pinia'
import { shallowReactive, shallowRef, watch } from 'vue'

export const useSvgDocStore = defineStore('svg-doc', () => {
  const elements = shallowReactive([] as SvgTree[])
  const selection = shallowRef(null as SvgTree | null)
  const viewed = shallowRef(null as SvgTree | null)

  const circle = useTree(useCircle())
  circle.position.value.x = 100
  circle.position.value.y = 10
  circle.root.attributes.cx.explicit.magnitude.value = 10
  circle.root.attributes.cy.explicit.magnitude.value = 10
  circle.root.attributes.r.explicit.magnitude.value = 10
  elements.push(circle)

  const ellipse = useTree(useEllipse())
  ellipse.position.value.x = 600
  ellipse.position.value.y = 10
  ellipse.root.attributes.cx.explicit.magnitude.value = 50
  ellipse.root.attributes.cy.explicit.magnitude.value = 50
  ellipse.root.attributes.rx.explicit.magnitude.value = 50
  ellipse.root.attributes.ry.explicit.magnitude.value = 100
  elements.push(ellipse)

  const svg = useTree(useSvg())
  svg.position.value.x = 350
  svg.position.value.y = 400
  svg.inputs.push(circle)
  svg.inputs.push(ellipse)
  elements.push(svg)

  viewed.value = svg

  return { elements, selection, viewed }
})
