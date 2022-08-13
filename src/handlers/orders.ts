import { OrderStore } from '../models/orders';
import express from 'express';
import {jwtVerify} from '../helpers/jwtHelper';

const orders = new OrderStore();
const secretKey = process.env.TOKEN_SECRET as string;

const orders_routes = (app: express.Application) => {
	app.get('/orders/:id', show);
};

async function show(req: express.Request, res: express.Response) {
	try {
		jwtVerify(req.headers.authorization!.split(' ')[1]);
		const result = await orders.showByUser(req.params.id);
		res.status(200).send(result);
	} catch (err) {
		const e = err as Error;
		if (e.message.includes('Could not retrieve orders by User:'))
			return res.status(401).send(e.message);
		res.status(500).send(e.message);
	}
}

export default orders_routes;
