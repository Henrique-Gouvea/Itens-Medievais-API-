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

function checkToken(token: string):number {
  try {
    const { data: { id } } = jwt.verify(token, SECRET);
    const { id } = jwt.decode(token as string) as { id: number };
    console.log(id);
    
    return id;
  } catch (error) {
    const e = new Error('Invalid token');
    e.name = 'Unauthorized';
    throw e;
  }
}

export default {
  createToken,
  checkToken,
};