<script setup lang="ts">
import { useSvgDocStore } from './stores/svg-doc-store'
import Element from './components/Element.vue'
import NodeEditor from './components/NodeEditor.vue'

const store = useSvgDocStore()
</script>

<template>
  <div :class="s.app">
    <NodeEditor :class="s.nodeEditor" />
    <Element v-if="store.viewed" :tree="store.viewed" :class="s.element" />
  </div>
</template>

<style module="s">
.app {
  display: grid;
  grid-template: 'full' 100% / 100%;
  block-size: 100vh;
  inline-size: 100vw;
}

.element,
.nodeEditor {
  grid-area: full;
}
</style>
