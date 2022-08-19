import { Router } from "express";
import { getTrendhashtag } from "../controllers/hashtagtrendController.js";
import { getHashtagpage } from "../controllers/hashtagpageController.js";
//import token

const hashtagtrendRouter = Router();

hashtagtrendRouter.get("/trending", getTrendhashtag); //rota para o elemento trending - falta token pois é autenticada
hashtagtrendRouter.get("/hashtag/:hashtag", getHashtagpage);

export default hashtagtrendRouter;
