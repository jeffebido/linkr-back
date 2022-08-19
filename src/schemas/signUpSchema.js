import joi from "joi";

const signUpSchema = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().trim().required(),
  username: joi.string().min(3).trim().required(),
  pictureUrl: joi.string().uri().trim().required(),
});

export default signUpSchema;
