import db from "../db/database.js";
import bcrypty from "bcrypt";

async function createUser(username, email, password, pictureUrl) {
  const SALT = 10;
  const passwordEncrypted = bcrypty.hashSync(password, SALT);

  await db.query(
    `INSERT INTO users (username, email, password, picture_url) VALUES ($1, $2, $3, $4)`,
    [username, email, passwordEncrypted,pictureUrl ]
  );
}

async function getUserByEmail(email) {
  return db.query(`SELECT * FROM users WHERE email = $1`, [email]);
}

export const usersRepository = {
  createUser,
  getUserByEmail,
};
