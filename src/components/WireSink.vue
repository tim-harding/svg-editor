<script setup lang="ts">
import { useDragStore } from '@/stores/drag-store'
import type { SvgTree } from '@/usables/useTree'

const props = defineProps<{
  sink: SvgTree
}>()

const dragStore = useDragStore()
</script>

<template>
  <div
    :class="s.wireEndpoint"
    @mouseover="
      () => {
        console.log('mouseover start')
        const drag = dragStore.drag
        if (!drag) return
        const state = drag.state
        if (state.kind !== 'wire-draw') return
        state.sink = props.sink
        console.log('mouseover end')
      }
    "
    @mouseout="
      () => {
        console.log('mouseout start')
        const drag = dragStore.drag
        if (!drag) return
        const state = drag.state
        if (state.kind !== 'wire-draw' || state.sink !== props.sink) return
        state.sink = null
        console.log('mouseout end')
      }
    "
  ></div>
</template>

<style module="s">
.wireEndpoint {
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
