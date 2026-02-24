const request = require('supertest');

const app = require('./app');

describe('Testando a API Express', () => {

    test('Deve responder com Hello, World!!! na rota raiz', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, World!!!' });
    });

});