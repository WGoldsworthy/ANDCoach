let chai = require('chai');

let chaiHttp = require('chai-http');
// let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Get objectives by Id', () => {
	it('Should return two objectives seeded for user 0', (done) => {
		chai.request('http://localhost:3001')
			.get("/api/objectives/0")
			.end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('data');
				res.body.should.have.property('success').eql(true);
				res.body.data.length.should.eql(2);
				done();
			})
	})
})

describe('Get Objectives for an user that doesnt exist', () => {
	it('Should return an empty data object', (done) => {
		chai.request('http://localhost:3001')
			.get("api/objectives/999")
			.end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('data');
				res.body.should.have.property('success').eql(true);
				res.body.length.should.eql(0);
				done();
			})
	})
})

describe('Get Objectives for an user that has bad data (username)', () => {
	it('Should return an empty data object', (done) => {
		chai.request('http://localhost:3001')
			.get("api/objectives/$%^&*(")
			.end((err, res) => {
				res.should.have.status(401);
				res.should.be.json;
				res.body.should.have.property('data');
				res.body.should.have.property('success').eql(true);
				res.body.length.should.eql(0);
				done();
			})
	})
})