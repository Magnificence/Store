import Client from '../database';

export type Order = {
	id?: number;
	userId: number;
	status: string;
};

export class OrderStore {
	async index(): Promise<Order[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM orders';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Could not retrieve orders ${err}`);
		}
	}

	async create(order: Order): Promise<Order> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO orders(user_id, order_status) VALUES ($1, $2) RETURNING *';
			const result = await conn.query(sql, [
				order.userId,
				order.status,
			]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Could not create order ${err}`);
		}
	}

	async showByUser(userId: string): Promise<Order[]> {
		try {
			const conn = await Client.connect();
			const sql =
				'SELECT * FROM orders where user_id = ($1) AND order_status = ($2)';
			const result = await conn.query(sql, [userId, 'ACTIVE']);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Could not retrieve orders by User: ${userId}. ${err}`);
		}
	}

	async addProduct(orderId: string, productId: string, productQty: string) {
		try {
			const conn = await Client.connect();
			const sql = 'INSERT INTO orders_products (order_id, product_id, product_qty) VALUES ($1, $2, $3) RETURNING *';
			const result = await conn.query(sql, [orderId, productId, productQty]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Could not add new product to the order ${err}`)
		}
	}
}
