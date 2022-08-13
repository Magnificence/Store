import { ProductStore } from '../../models/products';

const products = new ProductStore();

describe('Testing Product Table Suite', () => {
	it('[VALID] Query all Products || Returns List of Products', async () => {
		const result = await products.index();
		expect(result).toBeTruthy();
	});

	it('[VALID] Create a new Product || Returns Product', async () => {
		const result = await products.create({ name: 'Tablet', price: 5000 });
		expect(result).toEqual({ id: 2, name: 'Tablet', price: 5000 });
	});

	it('[VALID] Query Product with ID: 2 || Returns Product', async () => {
		const result = await products.show('2');
		expect(result).toEqual({ id: 2, name: 'Tablet', price: 5000 });
	});
});
