<template>
    <div>
        <h2 v-if="movies.length == 0" class="text-center mt-16 text-3xl text-pink-500">No results found!</h2>
        <div v-else class="justify-around p-4 sm:flex sm:flex-wrap sm:-mx-4 sm:overflow-hidden mt-4 sm:mt-0">
            <movie-card v-for="(movie, index) in movies" :key="index" :movie="movie" class="sm:my-4 sm:px-4 sm:w-1/2 md:overflow-hidden lg:w-1/3"></movie-card>
        </div>
    </div>
</template>

<script>
    import MovieCard from './MovieCard'
    import Sortbar from '@/components/Gremio/Sortbar'
    export default {
        name: 'movielist',
        components: {
            MovieCard,
            Sortbar
        },

        computed: {
            movies: {
                get() {
                    return this.$store.getters['Modules/Movies/getMovies']
                }
            }
        },

        mounted() {
            this.$store.dispatch('Modules/Movies/getPopular')
        }
    }
</script>

<style lang="scss" scoped>

</style>