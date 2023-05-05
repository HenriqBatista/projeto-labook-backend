import z from 'zod'

export interface LikeDislikePostInputDTO{
    postId: string,
    tokens: string,
    like: boolean,
}

export type LikeDislikePostOutputDTO = undefined

export const LikeDislikePostSchema = z.object({
    postId: z.string().min(1),
    tokens: z.string().min(1),
    like: z.boolean(),
})