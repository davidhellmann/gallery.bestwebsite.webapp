<!--
<%
var splittedPath = modulePath.split('/');
var simple = splittedPath[0] === splittedPath[1];
var mn = simple ? moduleName : splittedPath[0] + moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
mn = mn.replace('-', '_');
var cn = pathOptions.key.charAt(0) + '-' + mn;
%>
-->
<template>
  <div :class="[tw]"><%= mn %></div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: '<%= mn.charAt(0).toUpperCase() %><%= mn.slice(1) %>',
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
    return {
      cn: '<%= cn %>',
    }
  },
  computed: {
    rootClass() {
      const modifiers = this.modifiers
        .map((mod) => `${this.cn}--${mod}`)
        .join('  ')
      return [this.cn, modifiers]
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
})
</script>
