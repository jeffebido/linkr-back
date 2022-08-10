import db from "../db/database.js"

async function trendHashtag() {
    return db.query(
      `SELECT `
    );
}

const hashtagtrendRepository = {
    trendHashtag
}
export default hashtagtrendRepository;