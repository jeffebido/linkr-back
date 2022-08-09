import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import postsRouter from './routes/postsRouter.js';

async function main() {
  dotenv.config();

  const server = express();
  server.use(cors());
  server.use(json());

  server.use(postsRouter);

  const PORT = process.env.PORT || 3333;
  server.listen(PORT, '127.0.0.1', () => {
    console.log(`O servidor suviu na porta ${PORT}`);
  });
}

main().catch(console.error);
