import express from 'express';
import cors from 'cors';
import products_routes from './handlers/products';
import users_routes from './handlers/users';
import orders_routes from './handlers/orders';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Welcome to the Store API');
});

products_routes(app);
users_routes(app);
orders_routes(app);

app.listen(process.env.PORT, () => {
	console.log(`Server Intialized: Listening on PORT ${process.env.PORT}`);
});

export default app;
