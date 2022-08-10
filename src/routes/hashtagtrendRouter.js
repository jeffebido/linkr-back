import { Router } from "express";
import { getTrendhashtag } from "../controllers/hashtagtrendController";
//import token

const hashtagtrendRouter = Router();

hashtagtrendRouter.get("/trending", getTrendhashtag); //rota para o elemento trending

export default hashtagtrendRouter;