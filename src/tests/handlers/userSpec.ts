import app from '../../server';
import supertest from 'supertest';
import { User } from '../../models/users';

const request = supertest(app);

describe('Testing Users Handler Suite', () => {
	const user: User = {
		firstName: 'Doe',
		lastName: 'John',
		password: 'theDoeJohnny',
	};
	
    let token: string;

	beforeAll(async () => {
		await request
			.post('/users')
			.send(user)
			.expect(200)
			.then((res) => {
				token = res.text;
			});
	});

	it('[VALID] Query all Users || Returns List of Users', async () => {
		await request.get('/users').send().set('Authorization',`Bearer ${token}`).expect(200);
	});

    it('[VALID] Query User with ID: 1 || Returns User', async () => {
        await request.get('/users').send('1').set('Authorization',`Bearer ${token}`).expect(200);
    })
});
