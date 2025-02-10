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

export function usePreserveAspectRatio() {
  const align = ref('xMidYMid' as Align)
  const meetOrSlice = ref('meet' as MeetOrSlice)
  return {
    align,
    meetOrSlice,
    asString: computed(() => `${align} ${meetOrSlice}`),
  }
}
