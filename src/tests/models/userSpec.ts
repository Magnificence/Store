import { User, UserStore } from '../../models/users';

const users = new UserStore();

describe('Testing Users Table Suite', () => {
	it('Query all Users || Returns 1 User', async () => {
		const result = await users.index();
		expect(result).toBeTruthy();
	});

	it('Create a User || Returns User', async () => {
		const result = await users.create({
			firstName: 'Johnny',
			lastName: 'Doe',
			password: 'YOLO',
		});
		expect(result).toBeTruthy();
	});

	it('Query User of ID: 1 || Returns User', async () => {
		const result = await users.show('1');
		expect(result).toBeTruthy();
	});
});
