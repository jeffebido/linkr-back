import { publishQuerys } from "../repositories/publishRepository.js";

const publishPost = async (req, res) => {
    const { user } = res.locals;
    const { link, description } = req.body;
    const { allHashtags } = res.locals;
    try{
      const postId = await publishQuerys.postPublish([user.id, description, link]);
      if(allHashtags && allHashtags.length > 0){
        for(let i = 0; i < allHashtags.length; i++){
          const hashtagId = allHashtags[i];
         
          await publishQuerys.hashtagsPosts([hashtagId, postId.rows[0].id ]);
        }
      }
      res.sendStatus(200);
    }catch(error){
      console.log(error);
      return res.status(500).send(error);
    }
};

export default publishPost;