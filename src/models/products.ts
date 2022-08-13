import Client from '../database';

export type Product = {
	id?: number;
	name: string;
	price: number;
};

export class ProductStore {
	async index(): Promise<Product[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM products';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Can not retrieve Products ${err}`);
		}
	}

	async show(id: string): Promise<Product> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM products where id = ($1)';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Can not retrieve product: ${id}. ${err}`);
		}
	}

	async create(product: Product): Promise<Product> {
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
			const result = await conn.query(sql, [product.name, product.price]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Can not create product ${err}`);
		}
	}
}
