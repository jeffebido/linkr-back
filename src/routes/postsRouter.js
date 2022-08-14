import { Router } from 'express';
import { getTimelinePosts } from '../controllers/postsController.js';

import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';

const router = Router();

router.use(tokenMiddleware);//Exige autenticação

router.get("/timeline", getTimelinePosts);

export default router;