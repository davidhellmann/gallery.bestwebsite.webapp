<!--

-->
<template>
  <h1 :is="size" v-if="hasDefaultSlot" :class="[compVariant, tw]">
    <slot />
    <LayoutSpacer />
  </h1>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import LayoutSpacer from '@/components/Layout/Spacer'
export default defineComponent({
  name: 'TextHeadline',
  components: { LayoutSpacer },
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
  setup() {
    return {}
  },
  data() {
    return {
      variants: {
        default: '',
        block: 'text-center h4 mb-8',
      },
    }
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    },
    compVariant() {
      switch (this.variant) {
        case 'default':
          return this.variants.default
        case 'block':
          return this.variants.block
        default:
          return this.variants.default
      }
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
})
</script>
