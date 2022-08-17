import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import hashtagtrendRouter from "./routes/hashtagtrendRouter.js"
import authRouter from "./routes/authRouter.js";

import postsRouter from './routes/postsRouter.js';

async function main() {
  dotenv.config();

  const server = express();
  server.use(cors());
  server.use(json());

  server.use(postsRouter);

  server.use(hashtagtrendRouter);

  server.use(authRouter);


  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {

    console.log(`O servidor suviu na porta ${PORT}`);
  });
}

main().catch(console.error);
