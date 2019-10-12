<template>
    <navbar :bgClass="bgClass">
        <template>
            Sort by:
            <gremiobutton :bgClass="bgBtnClass" :text="textBtnPopular" @click.native="getPopular"></gremiobutton>
            <gremiobutton :bgClass="bgBtnClass" :text="textBtnRanking" @click.native="getTopRated"></gremiobutton>
        </template>
    </navbar>
</template>

<script>
    import Navbar from './Navbar'
    import Button from './Button'
    export default {
        name: 'sortbar',
        components: {
            Navbar,
            'gremiobutton': Button
        },
        data() {
            return {
                bgClass: 'bg-pink-900',
                bgBtnClass: 'bg-pink-600 hover:bg-pink-500 ml-2',
                textBtnPopular: 'Popular',
                textBtnRanking: 'Ranking'
            }
        },

        methods: {
            getPopular() {
                this.$store.dispatch('Modules/Movies/getPopular')
            },

            getTopRated() {
                this.$store.dispatch('Modules/Movies/getTopRated')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>