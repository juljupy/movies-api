<template>
    <div class="justify-around flex flex-wrap -mx-2 overflow-hidden mt-4">
        <movie-similar-card v-for="(movie, index) in movies" :key="index" :movie="movie" class="my-2 px-2 w-1/2 overflow-hidden lg:w-1/3"></movie-similar-card>
    </div>
</template>

<script>
    import MovieSimilarCard from './MovieSimilarCard'
    export default {
        name: 'similarmovies',
        props: ['id'],
        components: {
            MovieSimilarCard
        },

        computed: {
            movies() {
                return this.$store.getters['Modules/Movies/getSimilarMovies']
            }
        },

        mounted() {
            this.$store.dispatch('Modules/Movies/getSimilar', this.id)
        }
    }
</script>

<style lang="scss" scoped>

</style>