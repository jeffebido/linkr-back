import db from '../db/database.js';


async function getTimelinePosts() {

    return await db.query(`SELECT * FROM posts ORDER BY id ASC limit 20`);
}

export const postsRepository = {
	getTimelinePosts
}