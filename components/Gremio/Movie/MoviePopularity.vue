<template>
    <div class="px-6 py-4 text-center">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Popularity: {{ popularity }}</span>
    </div>
</template>

<script>
    export default {
        name: 'moviepopularity',
        props: ['popularity']
    }
</script>

<style lang="scss" scoped>

</style>