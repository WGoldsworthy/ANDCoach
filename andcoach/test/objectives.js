let chai = require('chai');

let chaiHttp = require('chai-http');
// let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);


describe('POST Objectives', () => {
	describe('CREATE new Objective', () => {
		it('Should return 200 response', (done) => {

			let objective = {
				_id: "5c7666e9cdaf27455d4f2354",
				title: "Create Obj Test",
				notes: "Create Obj Notes",
				evidence: "No evidence",
				status: "Not yet started",
				user_id: "23456789"
			};

			chai.request("http://localhost:3001")
				.post('/api/create')
				.send(objective)
				.end((err, res) => {
					res.should.have.status(200);
					console.log(err, res);
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});

	describe('UPDATE Objective title and description', () => {
		it('Should return 200 response', (done) => {

			let objective = {
				title: "Updating Objective Title",
				notes: "Updating objective text"
			};

			chai.request("http://localhost:3001")
				.post('/api/objUpdate/5c7666e9cdaf27455d4f2354')
				.send(objective)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});

	describe('UPDATE Objective status', () => {
		it('Should return 200 response', (done) => {

			let objective = {
				status: "In progress"
			};

			chai.request("http://localhost:3001")
				.post('/api/objUpdateStatus/5c7666e9cdaf27455d4f2354')
				.send(objective)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});
/*

	describe('UPDATE Objective evidence', () => {
		it('Should return 200 response', (done) => {

			let objective = {
				evidence: "http://www.evidence.com"
			};

			chai.request("http://localhost:3001")
				.post('/api/objUpdate/5c7666e9cdaf27455d4f2354')
				.send(objective)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});
*/

});


describe('GET Objectives', () => {
	describe('Get all objectives', () => {
		it('Should return 200 response', (done) => {

			chai.request("http://localhost:3001")
				.get('/api/objectives')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
	});
	describe('Get all Objectives for a user', () => {
		it('Should return 200 response', (done) => {

			chai.request("http://localhost:3001")
				.get('/api/objectives/23456789')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
	});
/*	describe('Get single note by id', () => {
		it('Should return 200 response', (done) => {

			chai.request("http://localhost:3001")
				.get('/notes/objectives/5c7666e9cdaf27455d4f2354')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
	});
	describe('Incorrect Note ID used to GET note', () => {
		it('Should return 500 response', (done) => {

			chai.request("http://localhost:3001")
				.get('/notes/note/wrongid')
				.end((err, res) => {
					res.should.have.status(500);
					done();
				});
		});
	});*/
});

describe('DELETE Objective', () => {
	describe('DELETE Objective by id', () => {
		it('Should return 200 response', (done) => {

			chai.request("http://localhost:3001")
				.post('/api/objDel/5c7666e9cdaf27455d4f2354')
				.send()
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});
});


/*

describe('Get objectives by User', () => {
	it('Should return two objectives seeded for user ID 23456789', (done) => {
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
*/
