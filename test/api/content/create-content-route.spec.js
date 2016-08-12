let mock = require('mock-require');
let mockFBService = require('../../../services/mocks/facebook-verification-service.mock.js');
mock('../../../services/facebook-verification-service', mockFBService);
let ContentCreate = require('../../../models/content/content-create.js').model;


let utils = require('../../utils.js');
let should = require(`should`);
let route = require('../../../api/content/create-content-route');
let request = require('supertest');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;
//let port = 7777;


// todo- implement later

describe.only	("Content creation API route",()=>{

	beforeEach((done)=>{
		let date = new Date();

		mockFBService.MockupUserIDAndAccessToken("bram","summer");

		Register.create({
			generatedLocalID:"bram",
			fbUserID:"stark",
			fbAccessToken:"summer",
			ts:date
		}, done);

	});

	it("should return an error if the authorization is not valid",(done)=>{
		let app = require('../../get-app.js')();
		route(app);

		request(app)
		.post('/content/create')
		.send({
			ownerFBUserID:"bram",
			fbAccessToken:"winter",
			content:{text:"win"}
		})
		.expect(403)
		.end(done);
	});
	it("should create the appropriate content in the DB when a GET request is made",(done)=>{
		let app = require('../../get-app.js')();
		route(app);
		request(app)
		.post('/content/create')
		.send({
			ownerFBUserID:"bram",
			fbAccessToken:"summer",
			content:{text:"win"}
		})
		.expect(200)
		.expect(function(err,res){
			//console.log('expect...',err.body);
			ContentCreate.findOne({ownerFBUserID:"bram"},(err,res)=>{
				should.not.exist(err);
				res.ownerFBUserID.should.equal("bram");
				res.content.text.should.equal("win");
			})
		})
		.end(done);

	});
});
