<script setup lang="ts">
import { Vec } from '@/misc/Vec'
import { useDragStore } from '@/stores/drag-store'
import type { SvgTree } from '@/usables/useTree'
import { templateRef } from '@vueuse/core'
import { computed, ref } from 'vue'
import Wire from './Wire.vue'
import WireSink from './WireSink.vue'
import { assert } from '@/misc/assertions'

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
  if (state.sink) {
    const inputs = state.sink.inputs
    if (inputs.includes(props.tree)) return
    inputs.push(props.tree)
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
    <WireSink :sink="props.tree" />
    <div
      :class="s.output"
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
    <Wire v-if="outboundTo" :from="outboundFrom" :to="outboundTo" />
    <Wire
      v-for="input in props.tree.inputs"
      :from="Vec.add(input.position.value, { x: 16 * 3, y: 16 * 2 })"
      :to="Vec.add(props.tree.position.value, { x: 16 * 3, y: 0 })"
    />
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

.inputs {
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

.output {
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
