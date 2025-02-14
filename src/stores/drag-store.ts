import type { SvgTree } from '@/usables/useTree'
import { useEventListener } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, effectScope, shallowRef, watch } from 'vue'

export const useDragStore = defineStore('drag', () => {
  const drag = shallowRef(null as null | SvgTree)
  const isDragging = computed(() => drag.value !== null)

  let dragScope = effectScope()
  watch(drag, (currentDrag) => {
    if (currentDrag === null) {
      dragScope.stop()
    } else {
      dragScope = effectScope()
      dragScope.run(() => {
        useEventListener(document, 'mousemove', (e) => {
          if (currentDrag.position.value === null) return
          currentDrag.position.value.x += e.movementX
          currentDrag.position.value.y += e.movementY
        })
        useEventListener(document, 'mouseup', (_) => {
          drag.value = null
        })
      })
    }
  })

  return { drag, isDragging }
})
