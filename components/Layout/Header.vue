<template>
  <div :class="['fixed top-0 left-0 right-0 h-12 md:h-24 z-10', tw]">
    <LayoutNavMain />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import LayoutNavMain from '@/components/Layout/NavMain'
export default defineComponent({
  name: 'LayoutHeader',
  components: { LayoutNavMain },
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
})
</script>
