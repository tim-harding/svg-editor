<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import NodeStandalone from './Node.vue'
import Wire from './Wire.vue'
import { useSvgDocStore } from '@/stores/svg-doc-store'

const doc = useSvgDocStore()

const pos = useMouse()
</script>

<template>
  <div :class="s.nodeEditor">
    <NodeStandalone v-for="tree in doc.elements" :tree="tree" :class="s.node" />
    <svg>
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
</style>
