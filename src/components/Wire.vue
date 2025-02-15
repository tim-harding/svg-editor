<script setup lang="ts">
import type { Vec } from '@/misc/Vec'
import { computed } from 'vue'

const props = defineProps<{
  from: Vec.T
  to: Vec.T
}>()

const d = computed(() => {
  return `M ${props.from.x},${props.from.y} L ${props.to.x},${props.to.y}`
})
</script>

<template>
  <Teleport to="#wires">
    <path :d :class="s.wire"></path>
  </Teleport>
</template>

<style module="s">
.wire {
  stroke: var(--accent-solid);
  stroke-width: 2px;
}
</style>
