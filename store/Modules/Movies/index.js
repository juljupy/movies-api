import { URL } from '@/store/API/config'

const proccessMovies = (movies) => {
    return movies.map((e) => {
            e.backdrop_path = `${URL.poster + e.backdrop_path}`
            e.poster_path = `${URL.poster + e.poster_path}`

            return e;
        })
}

const defaultState = () => {
    return {
        movies: [],
        sortByText: '',
        selectedMovie: {},
        similarMovies: {}
    }
}

const state = defaultState

const actions = {
    getTopRated({ commit }) {
        this.$axios.get(URL.movies.toprated)
                .then( response => proccessMovies(response.data.results) )
                .then( data => {
                    commit('SET_MOVIES', data)
                    commit('SET_SORT_BY_TEXT', 'Top Rated')
                })
    },

    getPopular({ commit }) {
        this.$axios.get(URL.movies.popular)
                .then( response => proccessMovies(response.data.results) )
                .then( data => {
                    commit('SET_MOVIES', data)
                    commit('SET_SORT_BY_TEXT', 'Popular')
                })
    },

    getDetail({ commit }, id) {
        this.$axios.get(URL.movies.detail.replace('idMovie', id))
                .then( response => proccessMovies([response.data])[0] )
                .then( data => commit('SET_SELECTED_MOVIE', data) )
    },

    getSimilar({ commit }, id) {
        this.$axios.get(URL.movies.similar.replace('idMovie', id))
                .then( response => proccessMovies(response.data.results) )
                .then( data => commit('SET_SIMILAR_MOVIES', data) )
    },

    searchMovie({ commit }, query) {
        this.$axios.get(URL.movies.search, { params: { query }})
                .then( response => proccessMovies(response.data.results) )
                .then( data => commit('SET_MOVIES', data) )
    }
}

const getters = {
    getMovies(state) {
        return state.movies
    },

    getSortText(state) {
        return state.sortByText
    },

    getSelectedMovie(state) {
        return state.selectedMovie
    },

    getSimilarMovies(state) {
        return state.similarMovies
    }
}

const mutations = {
    SET_MOVIES(state, movies) {
        state.movies = movies
    },

    SET_SORT_BY_TEXT(state, text) {
        state.sortByText = text
    },

    SET_SELECTED_MOVIE(state, movie) {
        state.selectedMovie = movie
    },

    SET_SIMILAR_MOVIES(state, movies) {
        state.similarMovies = movies
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}