<script setup lang="ts">
import { assert } from '@/misc/assertions'
import { type SvgElement } from '@/usables/useElement'
import { computed, watchEffect } from 'vue'

const props = defineProps<{
  element: SvgElement
}>()

const attributes = computed(() => {
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(props.element.attributes)) {
    switch (typeof v) {
      case 'string':
      case 'number':
      case 'bigint':
      case 'boolean':
      case 'symbol':
      case 'undefined':
      case 'function':
        out[k] = v
        break
      case 'object':
        assert('asAttribute' in v)
        out[k] = v.asAttribute
        break
    }
  }
  return out
})

watchEffect(() => console.log(attributes.value))
</script>

<template>
  <component :is="element.attributes.is" v-bind="attributes">
    <Element v-for="child in props.element.children" :element="child" />
  </component>
</template>
