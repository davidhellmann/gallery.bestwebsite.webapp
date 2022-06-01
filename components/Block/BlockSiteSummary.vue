<template>
  <div :class="[tw, 'grid grid-cols-1 lg:grid-cols-3 gap-8']">
    <main class="col-span-1 lg:col-span-2">
      <CardWebsite :entry="entry" />
    </main>
    <aside class="col-span-1 lg:p-8">
      <h1 class="text-5xl font-medium">{{ entry.title }}</h1>
      <p class="font-light text-blue-500 mt-4">SOTD: {{ entry.postDate }}</p>
      <Link v-if="entry.categoryCountry[0]" :to="entry.categoryCountry[0].uri">
        {{ entry.categoryCountry[0].title }}
      </Link>
      <StackColors
        v-if="entry.categoryColor.length > 0"
        :items="entry.categoryColor"
      />
      <StackTags v-if="Object.keys(finalTags).length" :items="finalTags" />
    </aside>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import CardWebsite from '~/components/Card/CardWebsite'
import Link from '~/components/Link/Link'
import StackColors from '~/components/Stacks/StackColors'
import StackTags from '~/components/Stacks/StackTags'

export default defineComponent({
  name: 'BlockSiteSummary',
  components: {
    StackColors,
    StackTags,
    Link,
    CardWebsite,
  },
  props: {
    tw: {
      type: String,
      default: '',
    },
    entry: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const finalTags = ref({
      ...(props.entry?.categoryCMS?.length > 0 && {
        cms: props.entry?.categoryCMS,
      }),
      ...(props.entry?.categoryStyle?.length > 0 && {
        style: props.entry?.categoryStyle,
      }),
      ...(props.entry?.categoryFramework?.length > 0 && {
        framework: props.entry?.categoryFramework,
      }),
      ...(props.entry?.categoryService?.length > 0 && {
        services: props.entry?.categoryService,
      }),
      ...(props.entry?.categoryCreator?.length > 0 && {
        creator: props.entry?.categoryCreator,
      }),
    })

    return { finalTags }
  },
})
</script>
