import {tokenRepository} from "../repositories/tokenRepository.js";


/* Valida se sessão do usuário é válida e existe para rotas autenticadas */
export async function tokenMiddleware(req, res, next) {

    const authorization = req.headers.authorization;

    const token = authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }
    
    const session = await tokenRepository.getSessionByToken(token);

    if (session.rows.length == 0) {
      return res.sendStatus(401);
    }
    
    const user = await tokenRepository.getUserById(session.rows[0].user_id);

    if (user.rows.length == 0) {
        return res.sendStatus(404);
    }

    delete user.rows[0].password;
    
    res.locals.user = user.rows[0];
  
    next();
}