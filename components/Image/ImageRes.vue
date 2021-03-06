<template>
  <figure :class="[tw]">
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
  <!--  <figure>
    <div
      v-if="background"
      :data-bgset="sources"
      :class="{
        'w-full absolute pin-t pin-r pin-b pin-l max-h-full': presized,
      }"
      :style="{ backgroundPosition: bgPosition }"
      data-sizes="auto"
      class="lazyload bg-no-repeat bg-cover h-full"
    >
      <slot />
    </div>
    <img
      v-if="!background"
      :alt="alt"
      :data-srcset="sources"
      :class="{
        'w-full absolute pin-t pin-r pin-b pin-l max-h-full': presized,
      }"
      data-sizes="auto"
      class="lazyload block"
    />

    <figcaption v-if="caption" class="text-sm py-1" v-html="caption" />
  </figure>-->
</template>

<script>
// https://twitter.com/_philippkuehn/status/1091025762218594304
export default {
  name: 'ResImage',
  /*
  transform: 'landscape',
  objectFit: null,
  lazy: true,
  showDominantColor: true,
  calcDominantColor: false,
  noscript: true,
  sources: null,
  caption: null-->
  * */
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
  computed: {},
}
</script>
