<template>
  <figure :class="[tw]" :style="getDominantColor">
    <img
      :src="image.base64"
      :srcset="
        image.srcset.replace(/\/uploads\//g, `${$config.assetBaseUrl}/uploads/`)
      "
      :width="image.width"
      :height="image.height"
      :alt="image.title"
      :class="{ lazyload: lazy }"
      :loading="lazy ? 'lazy' : 'auto'"
      data-sizes="auto"
      decoding="async"
    />
  </figure>
</template>

<script>
// https://twitter.com/_philippkuehn/status/1091025762218594304
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ResImage',
  props: {
    tw: {
      type: String,
      default: '',
    },
    image: {
      required: true,
      type: Object,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getDominantColor() {
      return `background-color: ${
        this.image.assetColorPalette && this.image.assetColorPalette.length > 0
          ? this.image.assetColorPalette[0].assetColor
          : 'transparent'
      }`
    },
  },
})
</script>
