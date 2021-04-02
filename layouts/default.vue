<template>
  <section class="pt-12 md:pt-24">
    <LayoutHeader id="appHeader" />
    <main id="appContent">
      <Nuxt />
    </main>
    <LayoutFooter
      v-if="globalSetFooter.globalAbout"
      id="appFooter"
      :global-about="globalSetFooter.globalAbout[0]"
    />
  </section>
</template>
<script>
import { defineComponent, onBeforeMount } from '@nuxtjs/composition-api'
import LayoutHeader from '@/components/Layout/Header'
import LayoutFooter from '@/components/Layout/Footer'
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist'
import globalFooter from '../graphql/globalSet.footer.gql'
const { useState } = createNamespacedHelpers('ui')
export default defineComponent({
  components: { LayoutFooter, LayoutHeader },
  setup() {
    const { navMainOpen } = useState(['navMainOpen'])

    const setThemeClass = () => {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    onBeforeMount(setThemeClass) // on `mounted` call `getUserRepositories`

    return { navMainOpen }
  },
  apollo: {
    globalSetFooter: {
      query: globalFooter,
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.navMainOpen ? 'overflow-hidden' : '',
      },
    }
  },
})
</script>
