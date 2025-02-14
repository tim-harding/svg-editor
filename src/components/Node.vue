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
    <span :class="s.name">{{ tree.root.tag }}</span>
    <div :class="s.inputs"></div>
    <div :class="s.output"></div>
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

  &:hover {
    background-color: var(--accent-bg-hover);
  }

  &:active {
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

.inputs {
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  border-radius: 0.5rem;
  inline-size: calc(100% - 2rem);
  block-size: 1rem;
  background-color: var(--accent-solid);
}

.output {
  position: absolute;
  bottom: -0.5rem;
  left: calc(50% - 0.5rem);
  border-radius: 0.5rem;
  inline-size: 1rem;
  block-size: 1rem;
  background-color: var(--accent-solid);
}
</style>
