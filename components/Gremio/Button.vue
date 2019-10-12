<template>
    <button class="pl-2 pr-2 pr-2 pl-2 rounded" :class="bgClass">{{text}}</button>
</template>

<script>
    export default {
        name: 'gremiobutton',
        props: ['text', 'bgClass']
    }
</script>

<style lang="scss" scoped>

</style>