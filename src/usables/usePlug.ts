import { computed, ref, type Ref } from 'vue'

export function usePlug<T>(defaultValue: T) {
  const direct = ref(defaultValue)
  const plug = ref(null as null | Ref<T | null>)
  const value = computed(() => (plug.value === null ? direct.value : plug.value))
  return { manualValue: direct, plug, value }
}
