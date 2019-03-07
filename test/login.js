let chai = require('chai');

let chaiHttp = require('chai-http');
// let server = require('../server');
let should = chai.should();




chai.use(chaiHttp);

describe('User Wrong Domain Login', () => {
	it('Should return 401 response', (done) => {

		let user = {
			id: "0",
			userId: "23456789",
			firstName: "Tester",
			lastName: "McTesterson",
			email: "test@test.com",
			imageUrl: "r6327"
		};

		chai.request("http://localhost:3001")
			.post('/users/login')
			.send(user)
			.end((err, res) => {
				res.should.have.status(401);
				done();
			});
	});
});

describe('User Fail Login', () => {
	it('Should return 401 response', (done) => {

		let user = {};

		chai.request("http://localhost:3001")
			.post('/users/login')
			.send(user)
			.end((err, res) => {
				res.should.have.status(401);
				done();
			});
	});
});

describe('User Success Login', () => {
	it('Should return 200 response', (done) => {

		let user = {
			id: "0",
			userId: "23456789",
			firstName: "Tester",
			lastName: "McTesterson",
			email: "test@and.digital",
			imageUrl: "r6327"
		};

		chai.request("http://localhost:3001")
			.post('/users/login')
			.send(user)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
});