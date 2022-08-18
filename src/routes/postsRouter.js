import { Router } from 'express';
import { getTimelinePosts } from '../controllers/postsController.js';
import  publishPost  from '../controllers/publishController.js';
import { likePost, deslikePost } from "../controllers/likeController.js";
import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';
import { haveHashtag } from '../middlewares/timelinerMiddleware.js';

const router = Router();


router.get("/timeline",  tokenMiddleware, getTimelinePosts);
router.post("/publish",  tokenMiddleware, haveHashtag,  publishPost);


router.post("/posts/favorite", tokenMiddleware , likePost);
router.delete("/posts/delfavorite" , deslikePost);

export default router;