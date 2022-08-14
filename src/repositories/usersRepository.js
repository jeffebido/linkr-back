import db from "../db/database.js";
import bcrypty from "bcrypt";

async function createUser(name, email, password) {
  const SALT = 10;
  const passwordEncrypted = bcrypty.hashSync(password, SALT);

  await db.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
    [name, email, passwordEncrypted]
  );
}

async function getUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email]);
}

export const usersRepository = {
  createUser,
  getUserByEmail,
};
