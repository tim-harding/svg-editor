import { computed, ref } from 'vue'

export type LengthUnit = '' | '%' | 'em' | 'ex' | 'px' | 'cm' | 'mm' | 'in' | 'pt' | 'pc'

export function useLength() {
  const unit = ref('' as LengthUnit)
  const value = ref(0)
  return {
    unit,
    value,
    asString: computed(() => `${value}${unit}`),
  }
}
