<!--

-->
<template>
  <footer
    :class="['bg-white text-blue-500 dark:bg-gray-800 dark:text-gray-400', tw]"
  >
    <SectionEl>
      <div
        class="container mt-24 py-20 text-center md:text-left md:grid md:gap-x-16 md:grid-cols-3"
      >
        <blockquote v-if="globalAbout.quote" class="col-span-2">
          <p class="font-bold text-7xl leading-none">
            {{ globalAbout.quote }}
          </p>
        </blockquote>
        <div>
          <TextHeadline v-if="globalAbout.headline" variant="h5">
            {{ globalAbout.headline }}
          </TextHeadline>
          <div
            v-if="globalAbout.copy"
            class="dark:text-gray-400 mt-4"
            v-html="globalAbout.copy"
          />
        </div>
      </div>
    </SectionEl>
  </footer>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TextHeadline from '@/components/Text/Headline'
import SectionEl from '~/components/Section/SectionEl.vue'

export default defineComponent({
  name: 'LayoutFooter',
  components: { TextHeadline, SectionEl },
  props: {
    tw: {
      type: String,
      default: '',
    },
    globalAbout: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
