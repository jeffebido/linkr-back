import db from "../db/database.js"

async function trendHashtag() {
    return db.query(
      `SELECT name as "hashtags" FROM hashtags ORDER BY mentions DESC, view_count DESC LIMIT 10;`
      
    );
}

const hashtagtrendRepository = {
    trendHashtag
}
export default hashtagtrendRepository;
