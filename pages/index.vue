<template>
  <div>
    <sortbar></sortbar>
    <div class="text-center text-2xl font-bold text-pink-900 mt-4">{{ sortByText }} Movies</div>
    <movies-list></movies-list>
  </div>
</template>

<script>
import MoviesList from '@/components/Gremio/Movie/MoviesList'
import Sortbar from '@/components/Gremio/Sortbar'
export default {
  layout: 'layouts/default',
  components: {
    MoviesList,
    Sortbar
  },
  computed: {
    sortByText: {
        get() {
            return this.$store.getters['Modules/Movies/getSortText']
        }
    }
  }
};
</script>

<style>

</style>
