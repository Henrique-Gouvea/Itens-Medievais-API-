import { IOrder } from '../interfaces/IOrder';
import connection from './connection';

async function getAll(): Promise<IOrder[]> {
  const query = `SELECT
    Orders.id,
    Orders.userId,
    JSON_ARRAYAGG(Products.id) AS productsIds
  FROM
    Trybesmith.Orders
  INNER JOIN
    Trybesmith.Products ON Products.orderId = Orders.id
  GROUP BY Orders.id
  ORDER BY Orders.userId;`;

  const [result] = await connection.execute(query);
  console.log(result);
  
  return result as IOrder[];
}

export default {
  getAll,
};