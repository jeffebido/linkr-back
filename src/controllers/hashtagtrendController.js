import hashtagtrendRepository from "../repositories/hashtagtrendRepository";

export async function getTrendhashtag(req, res){

    const {hashtag} = req.params; //imagino que isso aqui precisa existir

    try{
        const result = await hashtagtrendRepository.trendHashtag(hashtag);
        return res.send(result.rows);
    }catch (error) {
        return res.status(500).send(error);
    }

}