import axios from 'axios'

const RequestManager = axios.create({
    baseURL:"https://mapi.hotmangasd.com",
    responseType:'json',
    withCredentials:false
})

export default RequestManager;