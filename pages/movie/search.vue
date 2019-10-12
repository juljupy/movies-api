<template>
    <div>
        <div class="font-bold"><span class="text-pink-900">Search Query:</span> {{ query }}</div> 
        <movies-list></movies-list>
    </div>
</template>

<script>
    import MoviesList from '@/components/Gremio/Movie/MoviesList'
    export default {
        name: 'searchmovies',

        validate( { query, store }) {
            if(!query.hasOwnProperty('query')) {
                store.$router.push('/')
            }
            
            if(query.query == '') {
                store.$router.push('/')
            }

            return true;
        },

        computed: {
            movies() {
                return this.$store.getters['Modules/Movies/getMovies']
            },

            query() {
                return this.$nuxt.$route.query.query
            }
        },

        watch: {
            query(val) {
                this.search(val)
            }
        },

        components: {
            MoviesList
        },

        methods: {
            search(query) {
                const me = this
                me.$store.dispatch('Modules/Movies/searchMovie', query)
            }
        },

        mounted() {
            const me = this
            me.search(me.query)
        }
    }
</script>

<style lang="scss" scoped>

</style>