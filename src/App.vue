<script setup lang="ts">
import { useSvgDocStore } from './stores/svg-doc-store'
import { Element } from './components/Element'

const store = useSvgDocStore()
</script>

<template>
  <Element v-if="store.viewed" :tree="store.viewed"></Element>
</template>

<style module="s"></style>
