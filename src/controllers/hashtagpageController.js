import db from "../db/database.js";
//import hashtagtrendRepository from "../repositories/hashtagtrendRepository.js";

export async function getHashtagpage(req, res){

    const {hashtag} = req.params; //imagino que isso aqui precisa existir

    // try{
    //     const {trendings} = await hashtagtrendRepository.trendHashtag(hashtag);
    //     return res.send(trendings.rows);
    // }catch (error) {
    //     return res.status(500).send(error);
    // }



    // try{
    //     const { rows:trendings } = await hashtagtrendRepository();
    //     res.status(200).send(trendings)
    // }catch(error){
    //     console.log(`[ERRO] In getTrendings controller`);
    //     return res.status(500).send(error);
    // }

    try {
        const usersRank = await db.query(
            `SELECT p.id as post_id, u.username, u.picture_url, p.description, p.url, p.created_at, list.hashtags, likes.likes
            FROM ((posts p 
            LEFT JOIN (SELECT hp.post_id, string_agg(h.name,', ') as hashtags FROM hashtags_posts hp LEFT JOIN hashtags h ON h.name = hp.hashtag_name GROUP BY hp.post_id) as list
            ON list.post_id=p.id) 
            LEFT JOIN (SELECT p.id as post_id,p.description, string_agg(u.username,', ')as likes FROM (posts p JOIN likes l ON p.id = l.post_id) JOIN users u ON u.id=l.user_id GROUP BY p.id) 
            as likes ON likes.post_id = p.id )
            JOIN users u ON p.author_id=u.id 
            WHERE hashtags = $1
            ORDER BY p.created_at DESC LIMIT 20;`,[hashtag]
        );
    
        return res.status(200).send(usersRank.rows);
    
      } catch (error) {
        return res.status(500).send(error);
      }

}
