<template>
  <div>
    <main class="pt-12 md:pt-24">
      <LayoutHeader />
      <Nuxt />
      <LayoutFooter />
    </main>
  </div>
</template>
<script>
import LayoutHeader from '@/components/Layout/Header'
import LayoutFooter from '@/components/Layout/Footer'
export default {
  components: { LayoutFooter, LayoutHeader },
}
</script>
