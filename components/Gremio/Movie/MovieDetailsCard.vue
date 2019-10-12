<template>
    <div class="rounded overflow-hidden shadow-lg mb-4 sm:max-w-full md:justify-content md:flex flex-col">
    <div class="flex">
      <img class="w-full md:w-1/2 object-cover" :src="movie.poster_path" :alt="movie.title">
      <img class="hidden md:w-1/2 md:block object-cover" :src="movie.backdrop_path" :alt="movie.title">
    </div>
    <div class="sm:flex">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-pink-900">{{ movie.title }}</div>
        <p class="text-gray-700 text-base">
          {{ movie.overview }}
        </p>
      </div>
      <movie-popularity :popularity="movie.popularity"></movie-popularity>
    </div>
  </div>
</template>

<script>
import MoviePopularity from './MoviePopularity'
export default {
    name: 'moviedetailscard',
    props: ['movie'],
    components: {
      MoviePopularity
    }
}
</script>