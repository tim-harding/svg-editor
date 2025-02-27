<script setup lang="ts">
import type { Vec } from '@/misc/Vec'
import { computed } from 'vue'

const props = defineProps<{
  src: Vec.T
  dst: Vec.T
}>()

const d = computed(() => {
  return `M ${props.src.x},${props.src.y} L ${props.dst.x},${props.dst.y}`
})
</script>

<template>
  <Teleport to="#wires" defer>
    <path :d :class="s.wire"></path>
  </Teleport>
</template>

<style module="s">
.wire {
  stroke: var(--accent-solid);
  stroke-width: 2px;
}
</style>
