<script setup lang="ts">
import { useDragStore } from '@/stores/drag-store'
import type { SvgTree } from '@/usables/useTree'
import WireConnected from './WireConnected.vue'

const props = defineProps<{
  tree: SvgTree
}>()

const dragStore = useDragStore()
</script>

<template>
  <div
    :class="s.wireSink"
    @mouseover="
      () => {
        const drag = dragStore.drag
        if (!drag) return
        const state = drag.state
        if (state.kind !== 'wire-draw') return
        state.sink = props.tree
      }
    "
    @mouseout="
      () => {
        const drag = dragStore.drag
        if (!drag) return
        const state = drag.state
        if (state.kind !== 'wire-draw' || state.sink !== props.tree) return
        state.sink = null
      }
    "
  ></div>
  <WireConnected v-for="input in props.tree.inputs" :src="input" :dst="props.tree" />
</template>

<style module="s">
.wireSink {
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  border-radius: 0.5rem;
  inline-size: calc(100% - 2rem);
  block-size: 1rem;
  background-color: var(--accent-solid);

  &:hover {
    background-color: var(--accent-solid-strong);
  }
}
</style>
