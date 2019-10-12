import Vuex from 'vuex'
import moviesModule from './Modules/Movies'

const createStore = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
            moviesModule
        }
    })
}