<script setup lang="ts">
import { Vec } from '@/misc/Vec'
import { useDragStore } from '@/stores/drag-store'
import type { SvgTree } from '@/usables/useTree'
import { templateRef } from '@vueuse/core'
import { computed } from 'vue'
import WireSink from './WireSink.vue'
import WireSource from './WireSource.vue'

const props = defineProps<{
  tree: SvgTree
}>()

const self = templateRef('self')

const dragStore = useDragStore()

const transform = computed(() => {
  const position = props.tree.position.value
  if (position === null) return null
  return `translate(${position.x}px, ${position.y}px)`
})

function updateNodeMove(e: MouseEvent) {
  const value = props.tree.position.value
  const initialTreePosition = {
    x: value.x,
    y: value.y,
  }
  const initialCursorPosition = { x: e.clientX, y: e.clientY }
  return (cursor: Vec.T) => {
    const pos = Vec.add(initialTreePosition, Vec.sub(cursor, initialCursorPosition))
    value.x = pos.x
    value.y = pos.y
  }
}
</script>

<template>
  <div
    v-if="transform"
    ref="self"
    @mousedown="
      (e) => {
        if (e.target !== self) return
        dragStore.drag = {
          update: updateNodeMove(e),
          end: () => {},
          state: {
            kind: 'node-move',
          },
        }
      }
    "
    :style="{ transform }"
    :class="s.node"
  >
    <span :class="s.name">{{ tree.root.tag }}</span>
    <WireSink :tree="props.tree" />
    <WireSource :tree="props.tree" />
  </div>
</template>

<style module="s">
.node {
  position: relative;
  background-color: var(--accent-bg);
  border: 2px solid var(--accent-border);
  block-size: 2rem;
  inline-size: 6rem;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 0.25rem;
  color: var(--accent-text-strong);
  font-weight: 500;
  user-select: none;

  &:hover:not(:has(:hover)) {
    background-color: var(--accent-bg-hover);
  }

  &:active:not(:has(:active)) {
    background-color: var(--accent-bg-active);
  }
}

.name {
  position: absolute;
  left: calc(-100% - 1rem);
  width: 100%;
  height: 100%;
  text-align: end;
  pointer-events: none;
}
</style>
