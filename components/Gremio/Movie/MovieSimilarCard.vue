<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg font-bold">
    <img class="w-full" :src="movie.poster_path" :alt="movie.title">
    <div class="px-2 py-2">
      <div class="text-sm text-center">{{ movie.title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'moviecard',
    props: ['movie'],
    computed: {
      url() {
        return `/movie/${this.movie.id}`
      }
    }
  }

</script>
