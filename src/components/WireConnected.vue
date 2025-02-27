<script setup lang="ts">
import type { SvgTree } from '@/usables/useTree'
import Wire from './Wire.vue'
import { computed } from 'vue'
import { Vec } from '@/misc/Vec'

const props = defineProps<{
  src: SvgTree
  dst: SvgTree
}>()

const src = computed(() => Vec.add(props.src.position.value, { x: 16 * 3, y: 16 * 2 }))
const dst = computed(() => Vec.add(props.dst.position.value, { x: 16 * 3, y: 0 }))
</script>

<template>
  <Wire :src="src" :dst="dst" />
</template>

<style module="s"></style>
