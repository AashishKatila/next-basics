import {comments} from '../data'

//Dynamic Route Handling

export async function GET(_request:Request,{params}:{params:{id:string}}){
    const comment = comments.find(comment => comment.id === parseInt(params.id))
    return(Response.json(comment))
}