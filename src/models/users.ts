import Client from '../database';
import bcrypt from 'bcrypt';

const {SALT_ROUNDS, PEPPER} = process.env;

export type User = {
    id?: number;
    firstName: string;
    lastName: string;
    password: string;
}

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM users';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not retrieve Users ${err}`);
        }
    }

    async show(id: string): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM users WHERE id = ($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not retrieve user: ${id}. ${err}`);
        }
    }

    async create(user: User): Promise<User> {
        try {
            const conn = await Client.connect();
            const sql = 'INSERT INTO users (firstName, lastName, password) VALUES ($1,$2,$3) RETURNING *';
            const hashedPassword = bcrypt.hashSync(user.password + PEPPER, Number(SALT_ROUNDS));
            const result = await conn.query(sql, [user.firstName, user.lastName, hashedPassword]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Can not create user ${err}`)
        }
    }

}