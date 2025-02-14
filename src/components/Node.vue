<script setup lang="ts">
import { assert } from '@/misc/assertions'
import type { SvgTree } from '@/usables/useTree'
import { useEventListener } from '@vueuse/core'
import { computed, EffectScope, effectScope, shallowRef } from 'vue'

const props = defineProps<{
  tree: SvgTree
}>()

const dragScope = shallowRef(null as null | EffectScope)
const isDragging = computed(() => dragScope !== null)

function beginDrag() {
  dragScope.value = effectScope()
  dragScope.value.run(() => {
    useEventListener(document, 'mousemove', (e) => {
      if (props.tree.position.value === null) return
      props.tree.position.value.x += e.movementX
      props.tree.position.value.y += e.movementY
    })
    useEventListener(document, 'mouseup', (_) => {
      endDrag()
    })
  })
}

function endDrag() {
  assert(dragScope.value !== null)
  dragScope.value.stop()
  dragScope.value = null
}

const transform = computed(() => {
  const position = props.tree.position.value
  if (position === null) return null
  return `translate(${position.x}px, ${position.y}px)`
})
</script>

<template>
  <div v-if="transform" @mousedown="beginDrag" :style="{ transform }" :class="s.node">
    <span>{{ tree.root.tag }}</span>
  </div>
</template>

<style module="s">
.node {
  background-color: var(--accent-solid);
  block-size: min-content;
  inline-size: min-content;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 0.25rem;
  color: var(--accent-text-strong);
  font-weight: 500;
  user-select: none;

  &:hover {
    background-color: var(--accent-solid-strong);
  }
}
</style>
