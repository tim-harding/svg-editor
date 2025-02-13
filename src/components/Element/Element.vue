<script setup lang="ts">
import { type SvgElementOpaque } from '@/usables/useElement'
import { computed } from 'vue'

const props = defineProps<{
  element: SvgElementOpaque
}>()

const properties = computed(() => {
  return Object.fromEntries(
    Object.entries(props.element.attributes).map(([k, v]) => [k, v.property]),
  )
})
</script>

<template>
  <component :is="props.element.tag" v-bind="properties">
    <Element v-for="child in props.element.children" :element="child" />
  </component>
</template>
