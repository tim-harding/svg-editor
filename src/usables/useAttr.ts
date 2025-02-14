import { computed, ref, type Ref } from 'vue'
import type { Length } from './useLength'
import type { PreserveAspectRatio } from './usePreserveAspectRatio'
import type { Url } from './useUrl'
import type { ViewBox } from './useViewBox'

export type SvgAttribute = Length | PreserveAspectRatio | Url | ViewBox
export type SvgAttributeKind = SvgAttribute['kind']
export type SvgAttributePlug = ReturnType<typeof useAttr>

export function useAttr<T extends SvgAttribute>(explicit: T) {
  const plug = ref(null as null | Ref<T>)
  const resolved = computed(() => plug.value ?? explicit)
  return {
    explicit,
    plug,
    kind: computed(() => resolved.value.kind),
    property: computed(() => resolved.value.property.value),
  }
}
