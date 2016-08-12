let utils = require('../../utils.js');
let should = require(`should`);
let route = require('../../../api/content/create-content-route');
let request = require('supertest');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;
//let port = 7777;

// todo- implement later
/*
describe	("Content creation API route",()=>{

	beforeEach((done)=>{
		let date = new Date();

		Register.create({
			generatedLocalID:"bram",
			fbUserID:"stark",
			fbAccessToken:"summer",
			ts:date
		}, done);

	});

	//let appLocale = `https://localhost:${port}`;
	it("should return an error if the authorization is not valid",(done)=>{
		let app = require('../../get-app.js')();
		route(app);

		request(app)
		.post('/content/create')
		.send({
			localUserID:"bram",
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
			localUserID:"abc",
			fbAccessToken:"123",
			content:
			{
				text:"win"
			}
		})
		//.expect(200)
		.expect(function(err,res){
			console.log('expect...',err.body);
		})
		.end(done);

	});
})
*/
