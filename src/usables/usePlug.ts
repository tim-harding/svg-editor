import { computed, ref, type Ref } from 'vue'

export function usePlug<T>(defaultValue: T) {
  const direct = ref(defaultValue)
  const plug = ref(null as null | Ref<T | null>)
  const resolved = computed(() => plug.value ?? direct.value)
  return { direct, plug, resolved }
}
