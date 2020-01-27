"use strict"

var assert = require('assert');
var request = require('supertest')
var app = require('../app.js')


describe('clientes', function() {
    describe('GET', function() {
        it('Debe retornar todos los clientes y staatus 200', done => {
            request(app).get('/api/clientes/')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('POST', function() {
        it('Debe retornar status 201 y el cliente insertado ', done => {

            let cliente = {
                name: "Pepe el Toro",
                email: "pepetoro@live.com",
                balance: 0,
                classes: "spinning"
            }

            request(app).post('/api/clientes')
                .send(cliente)
                .expect(201, done);
        });
    });

    describe('PUT /:id', function() {
        it('debe retornar status 200', done => {

            let cliente = {
                name: "test",
                email: "test@test.com",
                balance: 555,
                classes: "yoga"
            }
            request(app).put('/api/clientes/5e2e7b0496805f0f88ec5cb8')
                .send({
                    email: "ialmaraz@gmsil.com"
                })
                .expect(200, done);
        });
    });

    describe('PUT balance/:email', function() {
        it('debe retornar status 200', done => {

            let cliente = {
                name: "test",
                email: "test@test.com",
                balance: 555,
                classes: ""
            }
            request(app).put('/api/clientes/balance')
                .send({
                    balance: 500
                })
                .expect(200, done);
        });
    });

    describe('PUT balance/:email', function() {
        it('debe retornar status 200', done => {

            let cliente = {
                name: "test",
                email: "test@test.com",
                balance: 555,
                classes: ""
            }
            request(app).put('/api/clientes/balance')
                .send({
                    classes: "yoga"
                })
                .expect(200, done);
        });
    });
});