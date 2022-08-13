import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const { DB_HOST, DB_NAME, DB_TEST, DB_USER, DB_PASSWORD, ENV } = process.env;

let client: Pool = new Pool({
	host: DB_HOST,
	database: ENV === 'DEV' ? DB_NAME : DB_TEST,
	user: DB_USER,
	password: DB_PASSWORD,
});

export default client;
