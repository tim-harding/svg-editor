import { useCircle } from '@/usables/useCircle'
import { useTree } from '@/usables/useElement'
import { useEllipse } from '@/usables/useEllipse'
import { useSvg } from '@/usables/useSvg'
import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useSvgDocStore = defineStore('svg-doc', () => {
  const circle = useTree(useCircle())
  circle.root.attributes.cx.explicit.magnitude.value = 10
  circle.root.attributes.cy.explicit.magnitude.value = 10
  circle.root.attributes.r.explicit.magnitude.value = 10

  const ellipse = useTree(useEllipse())
  ellipse.root.attributes.cx.explicit.magnitude.value = 50
  ellipse.root.attributes.cy.explicit.magnitude.value = 50
  ellipse.root.attributes.rx.explicit.magnitude.value = 50
  ellipse.root.attributes.ry.explicit.magnitude.value = 100

  const svg = useTree(useSvg())
  svg.children.push(circle)
  svg.children.push(ellipse)

  return { svg: markRaw(svg) }
})
