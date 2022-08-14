import db from "../db/database.js";
//import hashtagtrendRepository from "../repositories/hashtagtrendRepository.js";

export async function getTrendhashtag(req, res){

   // const {hashtag} = req.params; //imagino que isso aqui precisa existir

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
            `SELECT name as "hashtags" FROM hashtags ORDER BY mentions DESC, view_count DESC LIMIT 10;`
        );
    
        return res.status(200).send(usersRank.rows);
    
      } catch (error) {
        return res.status(500).send(error);
      }

}
