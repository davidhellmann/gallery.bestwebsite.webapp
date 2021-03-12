<template>
  <section :class="[tw]">
    <ul class="grid grid-cols-3 gap-8">
      <template v-for="(entry, index) in entries">
        <li v-if="index" :key="index">
          <CardWebsite :entry="entry" />
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import CardWebsite from '~/components/Card/CardWebsite'
// import Link from '~/components/Link/Link'
export default defineComponent({
  name: 'BlockRelatedWebsites',
  components: {
    // Link,
    CardWebsite,
  },
  props: {
    tw: {
      type: String,
      default: '',
    },
    entries: {
      type: Array,
      default: () => [],
      required: true,
    },
    limit: {
      type: Number,
      default: 6,
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
