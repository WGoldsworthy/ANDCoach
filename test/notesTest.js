let chai = require('chai');
let chaiHttp = require('chai-http');
// let app = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('POST Notes', () => {
    describe('CREATE new Note', () => {
        it('Should return 200 response', (done) => {

            let note = {
                _id: "5c7666e9cdaf27455d4f2353",
                user_id: "23456789",
                body: "Testing text"
            };

            chai.request("http://localhost:3001")
                .post('/notes/create')
                .send(note)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql(true);
                    done();
                });
        });
    });

    describe('UPDATE Note', () => {
        it('Should return 200 response', (done) => {

            let note = {
                user_id: "23456789",
                body: "Testing text update"
            };

            chai.request("http://localhost:3001")
                .post('/notes/update/5c7666e9cdaf27455d4f2353')
                .send(note)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql(true);
                    done();
                });
        });
    });

});


describe('GET Notes', () => {
    describe('Get all notes', () => {
        it('Should return 200 response', (done) => {

            chai.request("http://localhost:3001")
                .get('/notes/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    done();
                });
        });
    });
    describe('Get all notes for user', () => {
        it('Should return 200 response', (done) => {

            chai.request("http://localhost:3001")
                .get('/notes/notes/23456789')
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
                .get('/notes/note/5c7666e9cdaf27455d4f2353')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    done();
                });
        });
    });
    describe('Incorrect Note ID used to GET note', () => {
        it('Should return 404 response', (done) => {

            chai.request("http://localhost:3001")
                .get('/notes/note/wrongid')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('success').eql(false);
                    done();
                });
        });
    });
    describe('Attempt to GET note by userId but user or notes not exist', () => {
        it('Should return 404 response', (done) => {

            chai.request("http://localhost:3001")
                .get('/notes/notes/999')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.json;
                    res.body.should.have.property('success').eql(true);
                    done();
                });
        });
    });
});

describe('DELETE Note', () => {
    describe('DELETE Note by id', () => {
        it('Should return 200 response', (done) => {

            chai.request("http://localhost:3001")
                .post('/notes/delete/5c7666e9cdaf27455d4f2353')
                .send()
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('success').eql(true);
                    done();
                });
        });
    });
});
