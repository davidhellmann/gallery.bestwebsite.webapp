import { computed } from '@nuxtjs/composition-api'
export const useHasDefaultSlot = (defaultSlot = false) => {
  const hasDefaultSlot = computed(() => !!defaultSlot)
  return { hasDefaultSlot }
}
