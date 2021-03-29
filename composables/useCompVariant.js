import { computed } from '@nuxtjs/composition-api'
export const useCompVariant = (variant = '') => {
  const compVariant = computed(() => variant)
  return { compVariant }
}
