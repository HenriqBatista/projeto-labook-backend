import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase{
    private POST_TABLE = "posts"

    public findPosts = async ()=>{
        const postsDB = await BaseDatabase.connection(this.POST_TABLE)
        return postsDB
    }

    public findPostById = async (id:string)=>{
        const postDB = await BaseDatabase.connection(this.POST_TABLE).where({id})
        return postDB
    }

    public createPost = async(newPost:any)=>{
        await BaseDatabase.connection(this.POST_TABLE).insert(newPost)

        return "Post criado com sucesso!"
    }

    public editPost = async (uptadePost:any, id: string)=>{
        await BaseDatabase.connection(this.POST_TABLE).update(uptadePost).where({id:id})

        return "Post editado com sucesso!"
    }

    public deletePost = async (id:string)=>{
        await BaseDatabase.connection(this.POST_TABLE).del().where({id})

        return "Post excluido com sucesso!"
    }
}