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

describe('Get an individual objective by id', () => {
	it('Should a single objective', (done) => {
		chai.request('http://localhost:3001')
			.get("api/objectives/findOne/0")
			.end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('data');
				res.body.should.have.property('success').eql(true);
				res.body.length.should.eql(1);
				done();
			})
	})
})

describe('Update an objective', () => {
	it('Should update a single objective', (done) => {

		let objective = {
			_id: "0",
			title: "Test Update",
			evidence: "Empty",
			status: "Complete",
			user_id: "0"
		}

		chai.request('http://localhost:3001')
			.post("api/objectives/update")
			.send(objective)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);
				done();
			})
	})
})

describe('Delete an objective', () => {
	it('Should remove a single objective from the database', (done) => {

		let objective = {
			_id: "0",
			title: "Test Update",
			evidence: "Empty",
			status: "Complete",
			user_id: "0"
		}

		chai.request('http://localhost:3001')
			.post("api/objectives/delete")
			.send(objective)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);
				done();
			})
	})
})