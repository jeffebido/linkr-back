import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
// const databaseConfig = {
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// };

const databaseConfig = {
  // connectionString: process.env.DATABASE_URL,
  // ssl:{
//          rejectUnautorized: false
  //}
   host: 'localhost',
   port: 5432,
   user: 'postgres',
   password: 'euamopalmeiras',
   database: 'linkr3'
}

const db = new Pool(databaseConfig);
export default db;
