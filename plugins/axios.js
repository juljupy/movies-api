import { API } from '@/store/API/config'

export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.url = `${config.url}?api_key=${API.api_key}`
    })
}