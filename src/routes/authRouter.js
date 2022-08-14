import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import validateSchema from "../middlewares/validationMiddleware";
import signInSchema from "../schemas/signInSchema";
import signUpSchema from "../schemas/signUpSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signUpSchema), signUp);
authRouter.post("/signin", validateSchema(signInSchema), signIn);

export default authRouter;
