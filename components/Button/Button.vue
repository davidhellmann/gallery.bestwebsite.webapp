<template>
  <component :is="tag" v-bind="props" :class="[compVariant, tw]">
    <slot />
  </component>
</template>

<script>
// https://twitter.com/_philippkuehn/status/1091025762218594304
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Button',
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
      default: 'primary',
    },
  },
  data() {
    return {
      variants: {
        primary: 'bg-gray-800 hover:bg-gray-900 text-white p-2 rounded',
        secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-500 p-2 rounded',
      },
    }
  },
  computed: {
    compVariant() {
      switch (this.variant) {
        case 'primary':
          return this.variants.primary
        case 'secondary':
          return this.variants.secondary
        default:
          return this.variants.primary
      }
    },
    tag() {
      if (this.to) return 'NuxtLink'
      if (this.href) return 'a'
      return 'button'
    },
    // eslint-disable-next-line vue/return-in-computed-property
    props() {
      if (this.tag === 'NuxtLink') return { to: this.to }
      if (this.tag === 'a') return { href: this.href }
      if (this.tag === 'button') return { type: 'button' }
    },
  },
})
</script>
