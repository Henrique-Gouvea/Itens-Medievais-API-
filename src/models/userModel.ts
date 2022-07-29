import { ResultSetHeader } from 'mysql2';
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

export default {
  create,
};