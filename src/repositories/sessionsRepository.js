import db from "../db/database.js";

async function createSession(token, UserId) {
  await db.query(`INSERT INTO sessions (token, user_id) VALUES ($1, $2)`, [
    token,
    UserId,
  ]);
}

async function getSessionByToken(token) {
  return db.query(`SELECT * FROM sessions WHERE = token = $1`, [token]);
}

const sessionsRepository = {
  createSession,
  getSessionByToken,
};

export default sessionsRepository;
