import db from "../db/database.js";

const haveHashtag = async (queryString) => {
  return db.query(`SELECT * FROM hashtags WHERE name=$1`, queryString);
};

const newHashtag = async (queryString) => {
  return db.query(
    `INSERT INTO hashtags (name, mentions, view_count) VALUES ($1, $2, $3)`,
    queryString
  );
};

const updateMentions = async (queryString) => {
  return db.query(
    `
        UPDATE hashtags SET mentions = mentions + 1 WHERE id=$1`,
    queryString
  );
};

const postPublish = async (queryString) => {
  return db.query(
    `
        INSERT INTO posts (author_id, description, url) VALUES ($1, $2, $3) RETURNING id`,
    queryString
  );
};

const hashtagsPosts = async (queryString) => {
  return db.query(
    `
        INSERT INTO hashtags_posts (hashtag_name, post_id) VALUES ($1, $2)`,
    queryString
  );
};

export const publishQuerys = {
  haveHashtag,
  newHashtag,
  updateMentions,
  postPublish,
  hashtagsPosts,
};
