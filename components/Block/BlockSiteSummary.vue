<template>
  <div :class="[tw, 'grid  gap-8']">
    <main>
      <CardWebsite :entry="entry" />
    </main>
    <aside class="p-8">
      <h1 class="text-5xl font-medium">{{ entry.title }}</h1>
      <p class="font-light text-blue-500 mt-4">SOTD: {{ entry.postDate }}</p>
      <Link v-if="entry.categoryCountry[0]" :to="entry.categoryCountry[0].uri">
        {{ entry.categoryCountry[0].title }}
      </Link>
      <ul v-if="entry.categoryColor.length > 0" class="flex flex-row">
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
      </ul>
    </aside>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import CardWebsite from '~/components/Card/CardWebsite'
import Link from '~/components/Link/Link'

export default defineComponent({
  name: 'BlockSiteSummary',
  components: {
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
  data() {
    return {}
  },
  computed: {},
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
