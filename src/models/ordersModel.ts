import { IOrder } from '../interfaces/IOrder';
import connection from './connection';

async function getAll(): Promise<IOrder[]> {
  const query = 'SELECT * FROM Trybesmith.Orders';

  const [result] = await connection.execute(query);
  console.log(result);
  
  return result as IOrder[];
}

export default {
  getAll,
};