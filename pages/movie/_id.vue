<template>
<div>
  <movie-details-card :movie="movie"></movie-details-card>
  <div class="text-center text-2xl font-bold text-pink-900 mt-4">Similar Movies</div>
  <movie-similar :id="id"></movie-similar>
</div>
</template>

<script>
    import MovieDetailsCard from '@/components/Gremio/Movie/MovieDetailsCard'
    import MovieSimilar from '@/components/Gremio/Movie/MovieSimilar'
    export default {
        computed: {
            id() {
                return this.$route.params.id
            },

            movie: {
                get() {
                    return this.$store.getters['Modules/Movies/getSelectedMovie']
                }
            }
        },

        components: {
            MovieSimilar,
            MovieDetailsCard
        },

        mounted() {
            this.$store.dispatch('Modules/Movies/getDetail', this.id)
        }
    }
</script>

<style lang="scss" scoped>

</style>