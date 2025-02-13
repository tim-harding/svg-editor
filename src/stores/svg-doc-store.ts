import { useCircle } from '@/usables/useCircle'
import { useElement } from '@/usables/useElement'
import { useEllipse } from '@/usables/useEllipse'
import { useSvg } from '@/usables/useSvg'
import { defineStore } from 'pinia'

export const useSvgDocStore = defineStore('svg-doc', () => {
  const circle = useCircle()
  circle.cx.magnitude.value = 10
  circle.cy.magnitude.value = 10
  circle.r.magnitude.value = 10

  const ellipse = useEllipse()
  ellipse.cx.magnitude.value = 50
  ellipse.cy.magnitude.value = 50
  ellipse.rx.magnitude.value = 50
  ellipse.ry.magnitude.value = 100

  const svg = useElement(useSvg())
  svg.children.push(useElement(circle))
  svg.children.push(useElement(ellipse))

  return { svg }
})
