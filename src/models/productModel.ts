import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/IProduct';
import connection from './connection';

async function create(product: IProduct) {
  const { name, amount } = product;

  const query = 'INSERT INTO Products (name, amount) VALUES (?, ?)';

  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;

  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}

export default {
  create,
};