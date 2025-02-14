import { computed, ref } from 'vue'

export type ViewBox = ReturnType<typeof useViewBox>

export function useViewBox() {
  const left = ref(0)
  const top = ref(0)
  const width = ref(0)
  const height = ref(0)
  return {
    kind: 'viewBox' as 'viewBox',
    left,
    top,
    width,
    height,
    property: computed(() => `${left.value} ${top.value} ${width.value} ${height.value}`),
  }
}
