import { publishQuerys } from "../repositories/publishRepository.js";
import postSchema from "../schemas/postsSchema.js";

const haveHashtag = async (req, res, next) => {
  const { description } = req.body;

  const validate = postSchema.validate(req.body);

  if (validate.error) {
    return res.status(422).send(validate.error);
  }

  try {
    let allHashtags = description.match(/#[a-z0-9_]+/gi);

    if (allHashtags && allHashtags.length > 0) {
      for (let i = 0; i < allHashtags.length; i++) {
        allHashtags[i] = allHashtags[i].replace("#", "");
        const hashtag = allHashtags[i];
        const hashtagDb = await publishQuerys.haveHashtag([hashtag]);
        if (hashtagDb.rows.length === 0) {
          const queryString = [
            hashtag, //name
            1, //mentions
            0, //view_count
          ];
          await publishQuerys.newHashtag(queryString);
        } else {
          await publishQuerys.updateMentions([hashtagDb.rows[0].id]);
        }
      }
    }

    res.locals.allHashtags = allHashtags;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export { haveHashtag };
