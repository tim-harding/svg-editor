<script setup lang="ts">
import NodeStandalone from './Node.vue'
import { useSvgDocStore } from '@/stores/svg-doc-store'

const doc = useSvgDocStore()
</script>

<template>
  <div :class="s.nodeEditor">
    <NodeStandalone v-for="tree in doc.elements" :tree="tree" :class="s.node" />
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
