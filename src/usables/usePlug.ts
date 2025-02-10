import { computed, ref, type Ref } from 'vue'

export function usePlug<T>(defaultValue: T) {
  const plug = ref(null as null | Ref<T | null>)
  return {
    plug,
    output: computed(() => plug.value ?? defaultValue),
  }
}
