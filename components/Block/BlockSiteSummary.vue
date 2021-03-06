<template>
  <section :class="[tw, 'grid  gap-8  md:gap-16']">
    <main>
      <CardWebsite :entry="entry" />
    </main>
    <aside>Aside</aside>
  </section>
</template>

<script>
import CardWebsite from '~/components/Card/CardWebsite'
export default {
  name: 'SectionSiteSummary',
  components: {
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
}
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
