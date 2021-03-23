<!--<% var splittedPath = modulePath.split('/'); var simple = splittedPath[0] === splittedPath[1];var mn = simple ? moduleName : splittedPath[0] + moduleName.charAt(0).toUpperCase() + moduleName.slice(1);mn = mn.replace('-', '_'); %>-->
<template>
  <div :class="[tw]"><%= mn %></div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
// VueX Example
// import { createNamespacedHelpers } from 'vuex-composition-helpers/dist'
// const { useState, useMutations } = createNamespacedHelpers('ui')

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
    // VueX Example
    // const { foo } = useState(['foo'])
    // const { bar } = useMutations(['bar'])
    // USE .value >>> navMainOpen.value
    // return { foo, bar }
  },
})
</script>
