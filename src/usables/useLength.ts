import { computed, ref } from 'vue'

export type LengthUnit = '' | '%' | 'em' | 'ex' | 'px' | 'cm' | 'mm' | 'in' | 'pt' | 'pc'
export type Length = ReturnType<typeof useLength>

export function useLength() {
  const unit = ref('' as LengthUnit)
  const magnitude = ref(0)
  return {
    kind: 'length' as 'length',
    unit,
    magnitude,
    property: computed(() => `${magnitude.value}${unit.value}`),
  }
}
