<template>
  <div>
    <mainbar></mainbar>
    <nuxt />
  </div>
</template>

<script>
import Mainbar from '@/components/Gremio/Mainbar'
export default {
  name: "default",
  components: {
    Mainbar
  }
}
</script>

<style>
</style>
