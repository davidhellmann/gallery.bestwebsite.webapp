<!--

-->
<template>
  <hr :class="['border-0', { 'bg-gray-200': visible }, size, tw]" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'LayoutSpacer',
  components: {},
  props: {
    tw: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'h-2',
    },
    visible: {
      type: Boolean,
      default: false,
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
