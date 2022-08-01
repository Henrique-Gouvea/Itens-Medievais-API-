import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';
// import { IToken } from '../interfaces/IToken';

dotenv.config();
const SECRET: Secret = process.env.JWT_SECRET || 'trybe';
const jwtConfig: SignOptions = { expiresIn: '10d' };

function createToken(newUser: IUser | ILogin) {
  const newmUserNoPassword = newUser;
  delete (newmUserNoPassword.password);
  const token = jwt.sign({ data: newmUserNoPassword }, SECRET, jwtConfig);
  return token;
}

export default {
  createToken,
};