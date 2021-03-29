<template>
  <h1 :is="size" v-if="hasDefaultSlot" :class="[compVariant, tw]">
    <slot />
  </h1>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useCompVariant } from '~/composables/useCompVariant'
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
  },
  setup(props, { slots }) {
    const variants = ref({
      default: 'font-medium',
      h1: 'font-medium text-2xl',
      h2: 'font-medium text-xl',
      h3: 'font-medium text-lg',
      h4: 'font-medium text-md',
      h5: 'font-medium',
      h6: 'font-medium',
      block: 'font-medium text-center h4 mb-8',
    })

    const { compVariant } = useCompVariant(variants.value[props.variant])
    const { hasDefaultSlot } = useHasDefaultSlot(slots.default)

    return { compVariant, hasDefaultSlot }
  },
})
</script>
