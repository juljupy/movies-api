const API = {
    api_key : '4db0e5ec849cbacd7984be4771ff55ff'
}

const URL = {
    movies: {
        toprated : '/movie/top_rated',
        popular : '/movie/popular',
        detail: '/movie/idMovie',
        similar: '/movie/idMovie/similar',
        search: '/search/movie'
    },
    poster: 'http://image.tmdb.org/t/p/original'
}

export {
    API,
    URL
}