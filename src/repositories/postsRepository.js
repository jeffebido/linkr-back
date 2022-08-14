import db from '../db/database.js';


async function getTimelinePosts() {

    return await db.query(`SELECT posts.description, posts.url, users.name AS author, users.picture_url AS picture_url
                            FROM posts 
                            JOIN users ON users.id = posts.author_id
                            ORDER BY posts.id ASC limit 20  `);
}

export const postsRepository = {
	getTimelinePosts
}