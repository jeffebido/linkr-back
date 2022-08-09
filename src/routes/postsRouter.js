import { Router } from 'express';
import { getTimelinePosts } from '../controllers/postsController.js';


const router = Router();



router.get("/timeline", getTimelinePosts);

export default router;