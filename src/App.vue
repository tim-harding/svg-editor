<script setup lang="ts">
import { useSvgDocStore } from './stores/svg-doc-store'
import { Element } from './components/Element'

const store = useSvgDocStore()
</script>

<template>
  <Element :tree="store.svg"></Element>
</template>

<style module="s"></style>
