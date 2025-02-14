<script setup lang="ts">
import { useSvgDocStore } from './stores/svg-doc-store'
import Element from './components/Element.vue'
import NodeEditor from './components/NodeEditor.vue'

const store = useSvgDocStore()
</script>

<template>
  <Element v-if="store.viewed" :tree="store.viewed"></Element>
  <NodeEditor />
</template>

<style module="s"></style>
