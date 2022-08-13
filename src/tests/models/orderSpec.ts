import { Order, OrderStore } from '../../models/orders';
import { UserStore } from '../../models/users';

const orders = new OrderStore();
const users = new UserStore();

describe('Testing Orders Table Suite', () => {
	beforeAll(async () => {
		const result = await users.create({
			firstName: 'John',
			lastName: 'Doe',
			password: 'YOLO',
		});
		expect(result).toBeTruthy();
	});

	it('Query all Orders || Returns Empty List', async () => {
		const result = await orders.index();
		expect(result).toEqual([]);
	});

	it('Create new Order  || Returns 1 Order', async () => {
		const result = await orders.create({
			userId: 1,
			status: 'ACTIVE',
		});
		expect(result).toBeTruthy();
	});

	it('Query all Active Orders by User with ID: 1 || Returns 1 Order', async () => {
		const result = await orders.showByUser('1');
		expect(result).toBeTruthy();
	});
});
