<template>
  <div class="sm:max-w-sm rounded overflow-hidden shadow-lg mb-4">
    <img class="w-full" :src="movie.poster_path" :alt="movie.title">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
      <p class="text-gray-700 text-base">
        {{ movie.overview }}
      </p>
    </div>
    <div class="px-6 py-4 flex justify-between">
      
      <movie-popularity :popularity="movie.popularity"></movie-popularity>
      <nuxt-link :to="url" class="inline-block bg-blue-800 text-blue-100 h-full rounded-full px-3 py-1 text-sm font-semibold mr-2 hover:bg-blue-600">Details</nuxt-link>
    </div>
  </div>
</template>

<script>
  import MoviePopularity from './MoviePopularity'
  export default {
    name: 'moviecard',
    props: ['movie'],
    computed: {
      url() {
        return `/movie/${this.movie.id}`
      }
    },
    components: {
      MoviePopularity
    }
  }

</script>
