<script setup lang="ts">
import { useSvgDocStore } from './stores/svg-doc-store'
import Element from './components/Element.vue'
import NodeEditor from './components/NodeEditor.vue'
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'

const store = useSvgDocStore()
</script>

<template>
  <div :class="s.app">
    <SplitterGroup direction="horizontal">
      <SplitterPanel>
        <NodeEditor :class="s.nodeEditor" />
      </SplitterPanel>

      <SplitterResizeHandle :class="s.resizeHandle" />

      <SplitterPanel>
        <Element v-if="store.viewed" :tree="store.viewed" :class="s.element" />
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>

<style module="s">
.app {
  display: grid;
  grid-template: 'full' 100% / 100%;
  block-size: 100vh;
  inline-size: 100vw;
}

.element,
.nodeEditor {
  block-size: 100%;
  inline-size: 100%;
}

.resizeHandle {
  inline-size: 0.25rem;
  background-color: var(--neutral-solid);
}
</style>
