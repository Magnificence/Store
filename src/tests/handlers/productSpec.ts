import supertest from 'supertest';
import app from '../../server';
import {Product} from '../../models/products';

const request = supertest(app);

describe('Testing Products Handler Suite', () => {
	const product: Product = {name: 'iPhone', price: 7500};
    const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU4NTE4NzA5fQ.PjlLGosB_9shgg6858rwONKFMwqr_kg4X_yd9rPn5cc';
    beforeAll(async () => {
        await request.post('/products').send(product).set('Authorization', authHeader);
    })


    it('Query all Products || Returns ', async () => {
		await request.get('/products').send().expect(200);
	});


    it('Query Product with ID: 1 || Returns Product', async ()=> {
        await request.get('/products/1').send().expect(200);
    })
});
