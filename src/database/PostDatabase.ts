import { PostDB } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase{
    public static POST_TABLE = "posts"
    public static LIKES_DISLIKES_TABLE = "likes_dislikes"
    

    public findPosts = async ()=>{
        const postsDB = await BaseDatabase.connection(PostDatabase.POST_TABLE)
        return postsDB
    }

    public findPostById = async (id:string)=>{
        const postDB = await BaseDatabase.connection(PostDatabase.POST_TABLE).where({id})
        return postDB
    }

    public createPost = async(postDB:PostDB
        )=>{
        await BaseDatabase.connection(PostDatabase.POST_TABLE).insert(postDB)

        return "Post criado com sucesso!"
    }

    public editPost = async (uptadePost:any, id: string)=>{
        await BaseDatabase.connection(PostDatabase.POST_TABLE).update(uptadePost).where({id:id})

        return "Post editado com sucesso!"
    }

    public deletePost = async (id:string)=>{
        await BaseDatabase.connection(PostDatabase.POST_TABLE).del().where({id})

        return "Post excluido com sucesso!"
    }
}