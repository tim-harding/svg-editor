<script setup lang="ts">
import type { SvgTree } from '@/usables/useTree'
import { computed } from 'vue'

const props = defineProps<{
  tree: SvgTree
}>()

const properties = computed(() => {
  return Object.fromEntries(
    Object.entries(props.tree.root.attributes).map(([k, v]) => [k, v.property.value]),
  )
})
</script>

<template>
  <component :is="props.tree.root.tag" v-bind="properties">
    <Element v-for="child in props.tree.inputs" :tree="child" />
  </component>
</template>
