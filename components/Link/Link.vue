<template>
  <component
    :is="tag"
    v-bind="attributes"
    v-if="hasDefaultSlot"
    :class="[compVariant, compSize, tw]"
    ><slot
  /></component>
</template>

<script>
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'
import { useHasDefaultSlot } from '~/composables/useHasDefaultSlot'
// https://twitter.com/_philippkuehn/status/1091025762218594304
export default defineComponent({
  name: 'Link',
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    tw: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'default',
    },
  },
  setup(props, { slots }) {
    const tag = computed(() => {
      if (props?.to) return 'NuxtLink'
      if (props?.href) return 'a'
      return 'button'
    })

    const attributes = computed(() => {
      if (tag.value === 'NuxtLink')
        return { to: props.to === '/' ? '/' : `/${props.to}` }
      if (tag.value === 'a') return { href: props.href }
      if (tag.value === 'button') return { type: 'button' }
    })

    const variants = ref({
      default: '',
      button: 'font-bold',
      tag:
        'relative transition inline-block text-2xs hover:text-blue-500 !underline hover:!no-underline whitespace-pre rounded-full mt-3 mr-3',
    })

    const sizes = ref({
      default: '',
      tag: '',
      sm: 'px-2 py-1',
      md: 'px-4 py-2',
      lg: 'px-6 py-3',
    })

    // Assign variants
    const compVariant = variants.value[props.variant] ?? ''
    const compSize = sizes.value[props.size] ?? ''

    // Check for default slot
    const { hasDefaultSlot } = useHasDefaultSlot(slots.default)

    return { tag, attributes, hasDefaultSlot, compVariant, compSize }
  },
})
</script>
