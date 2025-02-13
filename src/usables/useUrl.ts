import { computed, ref } from 'vue'

export function useUrl() {
  const url = ref(new URL(''))
  return {
    url,
    asAttribute: computed(() => url.value.toString()),
  }
}
