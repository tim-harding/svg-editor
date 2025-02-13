import { computed, ref } from 'vue'

export type Url = ReturnType<typeof useUrl>

export function useUrl() {
  const url = ref(new URL(''))
  return {
    kind: 'url' as 'url',
    url,
    property: computed(() => url.value.toString()),
  }
}
