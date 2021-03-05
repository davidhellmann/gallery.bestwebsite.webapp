<template>
  <component :is="tag" v-bind="props">
    <slot />
  </component>
</template>

<script>
// https://twitter.com/_philippkuehn/status/1091025762218594304
export default {
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
}
</script>
