<script setup lang="ts">
import { useElementSize, useMouse, useMouseInElement, useResizeObserver } from '@vueuse/core'
import NodeStandalone from './Node.vue'
import Wire from './Wire.vue'
import { useSvgDocStore } from '@/stores/svg-doc-store'
import { computed, useTemplateRef, watchEffect } from 'vue'

const doc = useSvgDocStore()
const element = useTemplateRef('element')

const pos = useMouseInElement(element)
const { width, height } = useElementSize(element)
const viewBox = computed(() => `0 0 ${width.value} ${height.value}`)
</script>

<template>
  <div ref="element" :class="s.nodeEditor">
    <NodeStandalone v-for="tree in doc.elements" :tree="tree" :class="s.node" />
    <svg :viewBox :class="s.wires">
      <Wire :from="{ x: 0, y: 0 }" :to="{ x: pos.x.value, y: pos.y.value }" />
    </svg>
  </div>
</template>

<style module="s">
.nodeEditor {
  display: grid;
  grid-template: 'full' 100% / 100%;
}

.node {
  grid-area: full;
}

.wires {
  grid-area: full;
}
</style>
