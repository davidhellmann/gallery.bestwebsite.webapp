<template>
  <div
    :class="[
      'relative h-full z-10 px-4 md:px-8 flex items-center justify-between',
      tw,
    ]"
  >
    <Logo :class="['relative z-10']" />
    <ButtonDarkMode tw="z-10" />
    <Link
      tw="text-uiBase relative z-10 overflow-hidden h-8 rounded flex justify-end items-center
      focus:outline-none
      focus-visible:ring
      focus-visible:ring-gray-900"
      :aria-expanded="navMainOpen"
      aria-controls="navMain"
      @click.native="toggleNavMainOpen(!navMainOpen)"
    >
      <div class="relative w-28 h-full dark:text-gray-100 font-medium">
        <span
          :class="[
            'hidden sm:inline-block transition transition-transform duration-300 delay-300 absolute right-0 top-0 leading-[2rem] transform',
            navMainOpen ? '-translate-y-full' : '',
          ]"
          >Menu / Filter</span
        >
        <span
          :class="[
            'transition transition-transform duration-300 delay-300 absolute right-0 top-0 leading-[2rem] transform',
            navMainOpen ? '' : 'translate-y-full',
          ]"
          >Close Menu</span
        >
      </div>
      <div class="burger w-6 h-0.5 ml-4 relative" aria-hidden="true">
        <div
          :class="[
            'bg-blue-500 dark:bg-gray-400 h-0.5 w-5 absolute transform origin-center transition duration-300 delay-300',
            navMainOpen
              ? 'rotate-[135deg] scale-x-100'
              : 'scale-x-75 translate-x-[-2px] -translate-y-1',
          ]"
        ></div>
        <div
          :class="[
            'bg-blue-500 dark:bg-gray-400 h-0.5 w-5 absolute transition transform duration-300 delay-300',
            navMainOpen ? 'rotate-[-135deg]' : 'translate-y-1',
          ]"
        ></div>
      </div>
    </Link>
    <transition name="fade">
      <LayoutNavOverlay v-show="navMainOpen" id="navMain" />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import LayoutNavOverlay from '@/components/Layout/NavOverlay'
import Logo from '@/components/Logo/Logo'
import Link from '@/components/Link/Link'
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist'
import ButtonDarkMode from '@/components/Button/DarkMode'
const { useState, useMutations } = createNamespacedHelpers('ui')

export default defineComponent({
  name: 'LayoutNavMain',
  components: { ButtonDarkMode, Link, Logo, LayoutNavOverlay },
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
  setup() {
    const { navMainOpen } = useState(['navMainOpen'])
    const { toggleNavMainOpen } = useMutations(['toggleNavMainOpen'])

    return { navMainOpen, toggleNavMainOpen }
  },
})
</script>

<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
