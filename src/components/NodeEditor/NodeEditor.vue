<script setup lang="ts">
import type { SvgTree } from '@/usables/useElement'
import { Node } from './Node'

const props = defineProps<{
  tree: SvgTree
}>()
</script>

<template>
  <div>
    <span>{{ tree.root.tag }}</span>
  </div>
</template>

<style module="s"></style>
