<template>
  <h1
    :is="size"
    v-if="hasDefaultSlot"
    :class="[compVariant, compTextColorVariant, tw]"
  >
    <slot />
  </h1>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useHasDefaultSlot } from '~/composables/useHasDefaultSlot'
export default defineComponent({
  name: 'TextHeadline',
  components: {},
  props: {
    tw: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'h2',
    },
    variant: {
      type: String,
      default: 'default',
    },
    textColorVariant: {
      type: String,
      default: 'default',
    },
  },
  setup(props, { slots }) {
    const variants = ref({
      default: 'font-medium',
      h1: 'font-medium h1',
      h2: 'font-medium h2',
      h3: 'font-medium h3',
      h4: 'font-medium h4',
      h5: 'font-medium h5',
      h6: 'font-medium h6',
      block: 'font-medium text-center h4 mb-8',
    })

    const textColorVariants = ref({
      default: 'dark:text-gray-400',
    })

    const compVariant = variants.value[props.variant] ?? ''
    const compTextColorVariant =
      textColorVariants.value[props.textColorVariant] ?? ''
    const { hasDefaultSlot } = useHasDefaultSlot(slots.default)
    return { compVariant, compTextColorVariant, hasDefaultSlot }
  },
})
</script>
