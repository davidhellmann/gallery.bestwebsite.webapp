<template>
  <main class="pt-12 md:pt-24">
    <LayoutHeader />
    <Nuxt />
    <LayoutFooter />
  </main>
</template>
<script>
import LayoutHeader from '@/components/Layout/Header'
import LayoutFooter from '@/components/Layout/Footer'
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist'
const { useState } = createNamespacedHelpers('ui')
export default {
  components: { LayoutFooter, LayoutHeader },
  setup() {
    const { navMainOpen } = useState(['navMainOpen'])

    return { navMainOpen }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.navMainOpen ? 'overflow-hidden' : '',
      },
    }
  },
}
</script>
