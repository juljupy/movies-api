<template>
    <navbar :bgClass="bgClass">
        <template>
            <logo></logo>
            <search-input></search-input>
        </template>
    </navbar>
</template>

<script>
    import Logo from './Logo'
    import SearchInput from './SearchInput'
    import Navbar from './Navbar'
    export default {
        name: 'mainbar',
        components: {
            Navbar,
            Logo,
            SearchInput
        },

        data() {
            return {
                bgClass: 'bg-pink-600 justify-between'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>