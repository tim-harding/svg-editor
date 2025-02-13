import { useCircle } from '@/usables/useCircle'
import { useEllipse } from '@/usables/useEllipse'
import { useSvg } from '@/usables/useSvg'
import { defineStore } from 'pinia'

export const useSvgDocStore = defineStore('svg-doc', () => {
  const circle = useCircle()
  circle.attributes.cx.explicit.magnitude.value = 10
  circle.attributes.cy.explicit.magnitude.value = 10
  circle.attributes.r.explicit.magnitude.value = 10

  const ellipse = useEllipse()
  ellipse.attributes.cx.explicit.magnitude.value = 50
  ellipse.attributes.cy.explicit.magnitude.value = 50
  ellipse.attributes.rx.explicit.magnitude.value = 50
  ellipse.attributes.ry.explicit.magnitude.value = 100

  const svg = useSvg()
  svg.children.push(circle)
  svg.children.push(ellipse)

  return { svg }
})
