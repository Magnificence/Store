import { Product, ProductStore } from '../models/products';
import express from 'express';
import {jwtVerify} from '../helpers/jwtHelper';

const products = new ProductStore();

const products_routes = (app: express.Application) => {
	app.get('/products', index);
	app.get('/products/:id', show);
	app.post('/products', create);
};

async function index(req: express.Request, res: express.Response) {
	try {
		const result = await products.index();
		res.status(200).send(result);
	} catch (err) {
		const e = err as Error;
		if (e.message.includes('Can not retrieve Products'))
			return res.status(500).send(e.message);
		res.status(401).send(e.message);
	}
}

async function show(req: express.Request, res: express.Response) {
	try {
		const result = await products.show(req.params.id);
		res.status(200).send(result);
	} catch (err) {
		const e = err as Error;
		if (e.message.includes('Can not retrieve product:'))
			return res.status(500).send(e.message);
		res.status(401).send(e.message);
	}
}

async function create(req: express.Request, res: express.Response) {
	try {
		jwtVerify(req.headers.authorization!.split(' ')[1]);
		const result = await products.create({
			name: req.body.name,
			price: req.body.price,
		});
		res.status(200).send(result);
	} catch (err) {
		const e = err as Error;
		if (e.message.includes('Can not create product'))
			return res.status(500).send(e.message);
		res.status(401).send(e.message);
	}
}

export default products_routes;
