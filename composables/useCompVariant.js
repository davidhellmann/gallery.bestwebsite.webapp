import { computed } from '@nuxtjs/composition-api'
export const useCompVariant = (variant = '') => {
  const compVariant = computed(() => variant)
  return { compVariant }
}

export const useCompTextColorVariant = (variant = '') => {
  const compTextColorVariant = computed(() => variant)
  return { compTextColorVariant }
}
