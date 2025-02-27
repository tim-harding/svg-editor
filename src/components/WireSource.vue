<script setup lang="ts">
import { assert } from '@/misc/assertions'
import { Vec } from '@/misc/Vec'
import { useDragStore } from '@/stores/drag-store'
import type { SvgTree } from '@/usables/useTree'
import { computed, ref } from 'vue'
import Wire from './Wire.vue'

const props = defineProps<{
  tree: SvgTree
}>()

const dragStore = useDragStore()

const outboundFrom = computed(() => Vec.add(props.tree.position.value, { x: 16 * 3, y: 16 * 2 }))
const outboundTo = ref(null as null | Vec.T)

function updateWireDraw(pos: Vec.T) {
  outboundTo.value = pos
}

function endWireDraw() {
  const drag = dragStore.drag
  assert(drag !== null)
  const state = drag.state
  assert(state.kind === 'wire-draw')
  if (!state.sink) return
  const inputs = state.sink.inputs
  if (inputs.includes(props.tree)) return
  inputs.push(props.tree)
}
</script>

<template>
  <div
    :class="s.wireSource"
    @mousedown="
      () =>
        (dragStore.drag = {
          update: updateWireDraw,
          end: endWireDraw,
          state: {
            kind: 'wire-draw',
            sink: null,
          },
        })
    "
  ></div>
  <Wire v-if="outboundTo" :src="outboundFrom" :dst="outboundTo" />
</template>

<style module="s">
.wireSource {
  position: absolute;
  bottom: -0.5rem;
  left: calc(50% - 0.5rem);
  border-radius: 0.5rem;
  inline-size: 1rem;
  block-size: 1rem;
  background-color: var(--accent-solid);

  &:hover {
    background-color: var(--accent-solid-strong);
  }
}
</style>
