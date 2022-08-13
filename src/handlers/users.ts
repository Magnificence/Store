import { User, UserStore } from '../models/users';
import express from 'express';
import jwt from 'jsonwebtoken';
import {jwtVerify, jwtSign} from '../helpers/jwtHelper';

const users = new UserStore();

const users_routes = (app: express.Application) => {
	app.get('/users', index);
	app.post('/users', create);
};


async function index(req: express.Request, res: express.Response) {
	try {
		jwtVerify(req.headers.authorization!.split(' ')[1]);
		const result = await users.index();
		res.status(200).send(result);
	} catch (err) {
		const e = err as Error;
		if (e.message.includes('Could not retrieve Users'))
			return res.status(401).send(e.message);
		res.status(500).send(e.message);
	}
}

async function show(req: express.Request, res: express.Response) {
	try {
		jwtVerify(req.headers.authorization!.split(' ')[1]);
		const result = users.show(req.params.id);
		res.status(200).send(result);
	} catch (err) {
		const e = err as Error;
		if (e.message.includes('Could not retrieve user:'))
			return res.status(401).send(e.message);
		res.status(500).send(e.message);
	}
}

async function create(req: express.Request, res: express.Response) {
	try {
		const result = await users.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: req.body.password,
		});
        const jwToken = jwtSign(Number(result.id));
		res.status(200).send(jwToken);
	} catch (err) {
		const e = err as Error;
		if (e.message.includes('Can not create user'))
			return res.status(401).send(e.message);
		res.status(500).send(e.message);
	}
}

export default users_routes;
