import { Vec } from '@/misc/Vec'
import type { SvgTree } from '@/usables/useTree'
import { useEventListener } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, effectScope, shallowRef, watch } from 'vue'

export const useDragStore = defineStore('drag', () => {
  const drag = shallowRef(
    null as null | {
      tree: SvgTree
      initialTreePosition: Vec.T
      initialCursorPosition: Vec.T
    },
  )
  const isDragging = computed(() => drag.value !== null)

  let dragScope = effectScope()
  watch(drag, (currentDrag) => {
    if (currentDrag === null) {
      dragScope.stop()
    } else {
      dragScope = effectScope()
      dragScope.run(() => {
        useEventListener(document, 'mousemove', (e) => {
          if (currentDrag.tree.position.value === null) return
          const page = { x: e.screenX, y: e.screenY }
          const pos = Vec.add(
            currentDrag.initialTreePosition,
            Vec.sub(page, currentDrag.initialCursorPosition),
          )
          currentDrag.tree.position.value.x = pos.x
          currentDrag.tree.position.value.y = pos.y
        })
        useEventListener(document, 'mouseup', (_) => {
          drag.value = null
        })
      })
    }
  })

  return { drag, isDragging }
})
