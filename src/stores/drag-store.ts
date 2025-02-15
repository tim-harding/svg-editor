import { Vec } from '@/misc/Vec'
import { useEventListener } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, shallowRef, watch } from 'vue'

export const useDragStore = defineStore('drag', () => {
  const drag = shallowRef(
    null as null | {
      update: (pos: Vec.T) => void
      end: () => void
    },
  )
  const isDragging = computed(() => drag.value !== null)

  let stopMousemove = () => {}
  let stopMouseup = () => {}

  watch(drag, (currentDrag) => {
    if (currentDrag === null) {
      stopMousemove()
      stopMouseup()
    } else {
      stopMousemove = useEventListener(document, 'mousemove', (e) => {
        currentDrag.update({ x: e.clientX, y: e.clientY })
      })
      stopMouseup = useEventListener(document, 'mouseup', (_) => {
        currentDrag.end()
        drag.value = null
      })
    }
  })

  return { drag, isDragging }
})
