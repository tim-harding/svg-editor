<script setup lang="ts">
import { computed } from 'vue'
import { type SvgElement } from '@/usables/useElement'

const props = defineProps<{
  element: SvgElement
}>()

const children = computed(() => props.element.children ?? [])
</script>

<template>
  <component v-bind="props.element">
    <Element v-for="child in children" :element="child" />
  </component>
</template>
