import { useCircle } from '@/usables/useCircle'
import { useEllipse } from '@/usables/useEllipse'
import { useSvg } from '@/usables/useSvg'
import { defineStore } from 'pinia'

export const useSvgDocStore = defineStore('svg-doc', () => {
  const circle = useCircle()
  circle.attributes.cx.magnitude.value = 10
  circle.attributes.cy.magnitude.value = 10
  circle.attributes.r.magnitude.value = 10

  const ellipse = useEllipse()
  ellipse.attributes.cx.magnitude.value = 50
  ellipse.attributes.cy.magnitude.value = 50
  ellipse.attributes.rx.magnitude.value = 50
  ellipse.attributes.ry.magnitude.value = 100

  const svg = useSvg()
  svg.children.push(circle)
  svg.children.push(ellipse)

  return { svg }
})
