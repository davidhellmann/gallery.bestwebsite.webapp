<template>
  <component :is="tag" v-bind="props" :class="[tw]">
    <slot />
  </component>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
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
  },
  computed: {
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
