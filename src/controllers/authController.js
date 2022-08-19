import { usersRepository } from "../repositories/usersRepository.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import sessionsRepository from "../repositories/sessionsRepository.js";

export async function signIn(req, res) {
  const { email, password } = req.body;
  const { rows: users } = await usersRepository.getUserByEmail(email);
  const [user] = users;

  if (!user) {
    return res.sendStatus(401);
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = uuid();

    await sessionsRepository.createSession(token, user.id);

    delete user.id;
    delete user.password;
    delete user.created_at;
    return res.send({ ...user, token: token });
  }

  res.sendStatus(401);
}

export async function signUp(req, res) {
  const user = req.body;

  try {
    const existingUsers = usersRepository.getUserByEmail(user.email);

    if ((await existingUsers).rowCount > 0) {
      return res.sendStatus(409);
    }

    const { username, email, password, pictureUrl } = user;
    await usersRepository.createUser(username, email, password, pictureUrl);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
