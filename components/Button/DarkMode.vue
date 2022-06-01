<!---->
<template>
  <button
    :class="[
      'w-5 h-5 absolute left-1/2 transform -translate-x-1/2 -translate-y-px select-none focus:outline-none  focus-visible:ring  focus-visible:ring-gray-900',
      tw,
    ]"
    @click="toggleMode"
  >
    <div
      class="absolute w-5 h-5 inset-0 transition duration-300 opacity-0 dark:opacity-100"
    >
      <svg viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-728-363)">
          <path
            fill="#BDC3C7"
            fill-rule="evenodd"
            d="M47.133 28.309c-11.86 5.93-26.28 1.13-32.206-10.715C12.18 12.1 11.737 6.06 13.21.57 1.94 6.751-2.51 20.76 3.29 32.359c5.93 11.85 20.354 16.64 32.2 10.71 6.36-3.19 10.69-8.83 12.41-15.19 -.27.14-.53.28-.8.42"
            transform="translate(728 363)"
          />
        </g>
      </svg>
    </div>
    <div
      class="absolute w-5 h-5 inset-0 transition duration-300 opacity-100 dark:opacity-0"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M12 4.5c-4.136 0-7.5 3.364-7.5 7.5 0 4.13 3.364 7.5 7.5 7.5 4.13 0 7.5-3.37 7.5-7.5 0-4.14-3.37-7.5-7.5-7.5Z"
          />
          <path
            d="M12 3.5c.27 0 .5-.23.5-.5V1c0-.276-.23-.5-.5-.5 -.28 0-.5.22-.5.5v2c0 .27.22.5.5.5Z"
          />
          <path
            d="M12 20.5c-.28 0-.5.22-.5.5v2c0 .27.22.5.5.5 .27 0 .5-.23.5-.5v-2c0-.28-.23-.5-.5-.5Z"
          />
          <path
            d="M7.06 4.456c.09.16.26.25.43.25 .08 0 .17-.03.25-.07 .23-.14.32-.45.18-.69l-1-1.74c-.14-.24-.45-.33-.69-.19 -.24.13-.33.44-.19.68l1 1.73Z"
          />
          <path
            d="M16.933 19.544c-.14-.24-.45-.33-.69-.19 -.24.13-.33.44-.19.68l1 1.73c.09.16.26.25.43.25 .08 0 .17-.03.25-.07 .23-.14.32-.45.18-.69l-1.01-1.74Z"
          />
          <path
            d="M2.224 6.93l1.73 1c.07.04.16.06.24.06 .17 0 .34-.09.43-.25 .13-.24.05-.55-.19-.69l-1.74-1c-.24-.14-.55-.06-.69.18 -.139.23-.06.54.18.68Z"
          />
          <path
            d="M21.776 17.067l-1.74-1c-.24-.14-.55-.06-.69.18 -.14.23-.06.54.18.68l1.73 1c.07.04.16.06.25.06 .17 0 .34-.09.43-.25 .13-.24.05-.55-.19-.69Z"
          />
          <path
            d="M3.5 12c0-.28-.23-.5-.5-.5H1c-.276 0-.5.22-.5.5 0 .27.22.5.5.5h2c.27 0 .5-.23.5-.5Z"
          />
          <path
            d="M23 11.5h-2c-.28 0-.5.22-.5.5 0 .27.22.5.5.5h2c.27 0 .5-.23.5-.5 0-.28-.23-.5-.5-.5Z"
          />
          <path
            d="M3.95 16.067l-1.74 1c-.24.13-.33.44-.19.68 .09.16.26.25.43.25 .08 0 .17-.03.25-.07l1.73-1c.23-.14.32-.45.18-.69 -.14-.24-.45-.33-.69-.19Z"
          />
          <path
            d="M19.79 8c.08 0 .17-.03.25-.07l1.73-1c.23-.14.32-.45.18-.69 -.14-.24-.45-.33-.69-.19l-1.74 1c-.24.13-.33.44-.19.68 .09.16.26.25.43.25Z"
          />
          <path
            d="M7.75 19.361c-.24-.14-.55-.06-.69.18l-1 1.73c-.14.23-.06.54.18.68 .07.04.16.06.25.06 .17 0 .34-.09.43-.25l1-1.74c.13-.24.05-.55-.19-.69Z"
          />
          <path
            d="M16.25 4.639c.07.04.16.06.25.06 .17 0 .34-.09.43-.25l1-1.74c.13-.24.05-.55-.19-.69 -.24-.139-.55-.06-.69.18l-1 1.73c-.14.23-.06.54.18.68Z"
          />
        </g>
      </svg>
    </div>
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
// VueX Example
// import { createNamespacedHelpers } from 'vuex-composition-helpers/dist'
// const { useState, useMutations } = createNamespacedHelpers('ui')

export default defineComponent({
  name: 'ButtonDarkMode',
  components: {},
  props: {
    tw: {
      type: String,
      default: '',
    },
  },
  setup() {
    const toggleMode = () => {
      if (!document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
      }
    }
    return { toggleMode }
  },
})
</script>
