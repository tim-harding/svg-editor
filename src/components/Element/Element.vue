<script setup lang="ts">
import { type SvgElement } from '@/usables/useElement'
import { computed } from 'vue'

const props = defineProps<{
  element: SvgElement
}>()

const attributes = computed(() => {
  return Object.fromEntries(
    Object.entries(props.element.attributes).map(([k, v]) => [k, v.asAttribute]),
  )
})
</script>

<template>
  <component :is="props.element.tag" v-bind="attributes">
    <Element v-for="child in props.element.children" :element="child" />
  </component>
</template>
