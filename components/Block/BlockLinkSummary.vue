<template>
  <section :class="[tw, 'grid  gap-8']">
    <main>
      <CardLink :entry="entry" :fallback-image="fallbackImage || null" />
    </main>
    <aside class="p-8">
      <h1 class="text-5xl">{{ entry.title }}</h1>
      <Link v-if="entry.singleLinkSource" :to="entry.singleLinkSource">
        {{ entry.title }}
      </Link>

      {{ stripUrlComputed }}

      <!--      <ul v-if="entry.categoryColor.length > 0" class="flex flex-row">
        <li v-for="item in entry.categoryColor" :key="item.title">
          <a
            :href="item.uri"
            class="inline-block rounded-full w-8 h-8 p-1 mr-2 mt-2 shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-0.5"
          >
            <span
              class="inline-block rounded-full w-full h-full border border-gray-200"
              :style="{
                backgroundColor:
                  item.categoryFieldsColors[0].color || 'transparent',
              }"
            ></span>
          </a>
        </li>
      </ul>-->
    </aside>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useRootUrl } from '~/composables/useRootUrl'
import CardLink from '~/components/Card/CardLink'
import Link from '~/components/Link/Link'

export default defineComponent({
  name: 'BlockLinkSummary',
  components: {
    Link,
    CardLink,
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
    fallbackImage: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { stripUrlComputed } = useRootUrl(props.entry.singleLinkSource)

    return {
      stripUrlComputed,
    }
  },
})
</script>

<style lang="postcss" scoped>
section {
  grid-template-areas:
    'main'
    'aside';
  grid-template-columns: 1fr;

  @screen md {
    grid-template-areas: 'main main aside';
    grid-template-columns: 1fr 1fr 1fr;
  }
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}
</style>
