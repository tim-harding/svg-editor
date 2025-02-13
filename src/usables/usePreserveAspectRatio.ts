import { computed, ref } from 'vue'

export type Align =
  | 'none'
  | 'xMinYMin'
  | 'xMidYMin'
  | 'xMaxYMin'
  | 'xMinYMid'
  | 'xMidYMid'
  | 'xMaxYMid'
  | 'xMinYMax'
  | 'xMidYMax'
  | 'xMaxYMax'

export type MeetOrSlice = 'meet' | 'slice'

export type PreserveAspectRatio = ReturnType<typeof usePreserveAspectRatio>

export function usePreserveAspectRatio() {
  const align = ref('xMidYMid' as Align)
  const meetOrSlice = ref('meet' as MeetOrSlice)
  return {
    kind: 'preserveAspectRatio' as 'preserveAspectRatio',
    align,
    meetOrSlice,
    property: computed(() => `${align.value} ${meetOrSlice.value}`),
  }
}
