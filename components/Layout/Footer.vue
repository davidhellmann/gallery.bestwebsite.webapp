<!--

-->
<template>
  <div :class="[tw]">LayoutFooter</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'LayoutFooter',
  components: {},
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
