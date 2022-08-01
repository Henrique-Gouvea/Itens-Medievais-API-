import { ResultSetHeader } from 'mysql2';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import connection from './connection';

async function create(user: IUser): Promise<IUser> {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);

  const { insertId: id } = result;
  
  const newUser: IUser = { id, username, classe, level, password };
  return newUser;
}

async function getUserByUserName(user: ILogin): Promise<ILogin> {
  const { username, password } = user;

  const query = `SELECT * FROM Trybesmith.Users
  WHERE username=? AND password=?`;

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, password]);
  
  const [userReturn] = result as unknown as ILogin[];
  return userReturn;
}

export default {
  create,
  getUserByUserName,
};