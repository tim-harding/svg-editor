<script setup lang="ts">
import { useDragStore } from '@/stores/drag-store'
import type { SvgTree } from '@/usables/useTree'
import { computed } from 'vue'

const props = defineProps<{
  tree: SvgTree
}>()

const dragStore = useDragStore()

const transform = computed(() => {
  const position = props.tree.position.value
  if (position === null) return null
  return `translate(${position.x}px, ${position.y}px)`
})
</script>

<template>
  <div
    v-if="transform"
    @mousedown="() => (dragStore.drag = props.tree)"
    :style="{ transform }"
    :class="s.node"
  >
    <span>{{ tree.root.tag }}</span>
    <div :class="s.inputs"></div>
    <div :class="s.output"></div>
  </div>
</template>

<style module="s">
.node {
  position: relative;
  display: grid;
  place-content: center;
  background-color: var(--accent-solid);
  block-size: 2.5rem;
  inline-size: 6rem;
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

.inputs {
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  border-radius: 0.5rem;
  inline-size: calc(100% - 2rem);
  block-size: 1rem;
  background-color: var(--yellow-solid);
}

.output {
  position: absolute;
  bottom: -0.5rem;
  left: calc(50% - 0.5rem);
  border-radius: 0.5rem;
  inline-size: 1rem;
  block-size: 1rem;
  background-color: var(--yellow-solid);
}
</style>
