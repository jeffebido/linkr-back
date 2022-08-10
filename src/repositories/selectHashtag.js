import db from "../database/db.js"

async function selectHashtag(name) {
    return db.query('SELECT * FROM hashtags WHERE name = $1', [name])
}

export { selectHashtag }