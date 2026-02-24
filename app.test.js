const request = require('supertest');

const app = require('./app');

describe('Testando a API Express', () => {

    test('Deve responder com Hello, World!!! na rota raiz', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, World!!!' });
    });

    test('Deve somar corretamente', async () => {
        const res = await request(app).get('/soma/10/5');

        expect(res.body.resultado).toBe(15);
    });

    test('Deve dividir corretamente', async () => {
        const res = await request(app).get('/divisao/10/2');

        expect(res.body.resultado).toBe(5);
    });

    test('Deve retornar erro na divisão por zero', async () => {
        const res = await request(app).get('/divisao/10/0');

        expect(res.statusCode).toBe(400);
    });

});