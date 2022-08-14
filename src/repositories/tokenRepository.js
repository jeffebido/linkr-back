import db from '../db/database.js';


async function getSessionByToken(token) {

    return await db.query(`SELECT * FROM sessions WHERE token = $1`, [token]);
}

async function getUserById(id) {

    return await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
}

export const tokenRepository = {
	getSessionByToken, 
    getUserById
}