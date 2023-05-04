import { PostDatabase } from "../database/PostDatabase";
import { UserDatabase } from "../database/UserDatabase";



export class PostBusiness{
    constructor(
        private postDatabase : PostDatabase,
        private userDatabase : UserDatabase,
        
    ){}
}