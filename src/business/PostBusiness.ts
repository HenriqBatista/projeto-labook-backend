import { PostDatabase } from "../database/PostDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { CreatePostInputDTO, CreatePostOutputDTO } from "../dtos/post/createPost.dto";
import { BadRequestError } from "../errors/BadRequestError";
import { Post } from "../models/Post";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";



export class PostBusiness{
    constructor(
        private postDatabase : PostDatabase,
        private userDatabase : UserDatabase,
        private idGenerator : IdGenerator,
        private tokenManager : TokenManager
        
    ){}

   public createPost = async (
    input: CreatePostInputDTO
   ):Promise<CreatePostOutputDTO>=>{
    const {content, token} = input

    const payload = this.tokenManager.getPayload(token)
    if(!payload){
        throw new BadRequestError("Token inválido")
    }
    const id = this.idGenerator.generate()
    const post = new Post(
        id,
        content,
        0,
        0,
        new Date().toISOString(),
        new Date().toISOString(),
        payload.id,
        payload.name
    )
    const postDB = post.toPostDBModel()
    await this.postDatabase.createPost(postDB)

    const output: CreatePostOutputDTO = undefined
    return output

   }
}