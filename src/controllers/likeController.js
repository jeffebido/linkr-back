import { favoriteRepository } from '../repositories/likeRepository.js'


export async function likePost(req, res){
    let {post_id} = req.body;
    let userId = 2;
    //console.log(post_id)
    if(userId==null){
        userId='2';
    }
    try{
      favoriteRepository.favoritePost(post_id, userId);
      return res.sendStatus(200);
  
    }catch(e){
      return res.sendStatus(500);
    }
  
  }
  
  
  export async function deslikePost(req, res){
    let {post_id} = req.body;
    let userId = '2';
    try{
        favoriteRepository.removeFavorite(post_id, userId);
      return res.sendStatus(200);
  
    }catch(e){
      return res.sendStatus(500);
    }
  }