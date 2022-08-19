import joi from "joi";

const postSchema = joi.object({
  link: joi.string().max(255).uri().required(),
  description: joi.string().allow(null, ""),
});

export default postSchema;
