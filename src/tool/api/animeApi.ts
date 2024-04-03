import RequestManager from '../request'

export const get_anime_info = (params:object) =>{
    const typeId = 1
    try {
        return RequestManager.get(
            '/api/v3/cartoons',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
                params
            }
        )
    }catch(error){
        return error
    }
}

type AnimeApiType = {
    get_anime_info:Function
}

const AnimeApi:AnimeApiType = {
    get_anime_info,

}

export default AnimeApi;
