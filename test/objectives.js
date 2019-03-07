let chai = require('chai');

let chaiHttp = require('chai-http');
// let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);


describe('POST Objectives', () => {
	describe('CREATE new Objective', () => {
		it('Should return 200 response', (done) => {

			let objective = {
				_id: "5c7681b01cb959ff40e661f2",
				title: "Create Obj Test",
				notes: "Create Obj Notes",
				evidence: "None",
				status: "Not yet started",
				user_id: "23456789"
			};

			chai.request("http://localhost:3001")
				.post('/api/create')
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
				.post('/api/objUpdateStatus/5c7681b01cb959ff40e661f2')
				.send(objective)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});


        describe('UPDATE Objective evidence', () => {
            it('Should return 200 response', (done) => {

                let objective = {
                    evidence: "http://www.evidence.com"
                };

                chai.request("http://localhost:3001")
                    .post('/api/evidence/5c7681b01cb959ff40e661f2')
                    .send(objective)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('success').eql(true);
                        done();
                    });
            });
        });


});


describe('GET Objectives', () => {
	describe('Get all objectives', () => {
		it('Should return 200 response', (done) => {

			chai.request("http://localhost:3001")
				.get('/api/objectives')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success').eql(true);
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
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});
	describe('Get all Objectives for a non-existent user', () => {
		it('Should return 200 response', (done) => {

			chai.request("http://localhost:3001")
				.get('/api/objectives/fakeuserid')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});
		describe('Get single note by id', () => {
            it('Should return 200 response', (done) => {

                chai.request("http://localhost:3001")
                    .get('/api/objectivesID/5c7681b01cb959ff40e661f2')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
        describe('Incorrect Note ID used to GET note', () => {
            it('Should return 200 response', (done) => {

                chai.request("http://localhost:3001")
                    .get('/api/objectivesID/wrongid')
                    .end((err, res) => {
                        res.should.have.status(200);
						res.body.should.be.a('object');
                        done();
                    });
            });
        });
});

describe('DELETE Objective', () => {
	describe('DELETE Objective by id', () => {
		it('Should return 200 response', (done) => {

			chai.request("http://localhost:3001")
				.post('/api/objDel/5c7681b01cb959ff40e661f2')
				.send()
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property('success').eql(true);
					done();
				});
		});
	});
});

