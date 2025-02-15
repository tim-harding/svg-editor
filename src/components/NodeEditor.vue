<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import NodeStandalone from './Node.vue'
import { useSvgDocStore } from '@/stores/svg-doc-store'
import { computed, useTemplateRef } from 'vue'

const doc = useSvgDocStore()
const element = useTemplateRef('element')

const { width, height } = useElementSize(element)
const viewBox = computed(() => `0 0 ${width.value} ${height.value}`)
</script>

<template>
  <div ref="element" :class="s.nodeEditor">
    <NodeStandalone v-for="tree in doc.elements" :tree="tree" :class="s.node" />
    <svg id="wires" :viewBox :class="s.wires"></svg>
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
