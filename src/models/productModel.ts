import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/IProduct';
import connection from './connection';

async function create(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;
  
  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}

async function getAll(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';

  const [result] = await connection.execute(query);
  
  return result as IProduct[];
}

export default {
  create,
  getAll,
};