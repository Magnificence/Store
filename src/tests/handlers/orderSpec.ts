import app from '../../server';
import {Order} from '../../models/orders';
import supertest from 'supertest';

const request = supertest(app);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU4NTE4NzA5fQ.PjlLGosB_9shgg6858rwONKFMwqr_kg4X_yd9rPn5cc';

describe('Testing Orders Handler Suite', () => {
    it('[VALID] Show Active Order by User ID: 1 || Returns Order', async () => {
        await request.get('/orders/1').send().set('Authorization',`Bearer ${token}`).expect(200);
    })
})