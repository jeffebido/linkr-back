import {postsRepository} from "../repositories/postsRepository.js";

export async function getTimelinePosts(req, res) {

    try {
        const posts  = await postsRepository.getTimelinePosts();

        return res.status(200).send(posts.rows);
        
    } catch (err) {
        return res.sendStatus(400);
    }
}