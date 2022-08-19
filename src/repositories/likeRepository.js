import db from '../db/database.js';

async function favoritePost(post_id, userId){
    return await db.query(`INSERT INTO likes (user_id, post_id) VALUES ($1, $2)`, [userId, post_id]);
}

async function removeFavorite(post_id, userId){
    return await db.query(`DELETE FROM likes WHERE user_id = $1 AND post_id = $2`, [userId, post_id]);
}

export const favoriteRepository = {
    favoritePost,
    removeFavorite
}