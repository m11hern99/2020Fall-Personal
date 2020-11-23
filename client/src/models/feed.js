import { myFetch } from "./my-fetch";

export const getPosts = ()=> myFetch('posts/byUser/2');

export function react(post_id){
    return myFetch('reactions', { Post_id: post_id, Owner_id: 2 })
}
export function comment(post_id, text){
    return myFetch('comments', { Post_id: post_id, Owner_id: 2, Text: text })
}

