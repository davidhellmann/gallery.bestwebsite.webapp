<!--

-->
<template>
  <div :class="[tw]">LayoutDivider</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'LayoutDivider',
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
