let utils = require('../../utils.js');
let should = require(`should`);
let assert = require('assert');
describe("User Authentication Service",()=>{
	describe("Get User User Data",()=>{
		beforeEach((done)=>{
			// TODO
			/*
			let login = require('../../../models/userEvent/user-facebook-login.js').model;

			let loginEvent = {
				localUserID:"ABC",
				fbUserID:"123",
				accessToken:"99RBalloon",
				ts:new Date()
			};

			model.create(loginEvent, function (err, createdLoginEvent) {
				should.not.exist(err);
				createdLoginEvent.localUserID.should.equal('ABC');
				createdLoginEvent.fbUserID.should.equal('123');
				createdLoginEvent.ts.should.equal(date);
				done();
			});
			*/
			done();
		});
		it("Should provide the correct user data for a valid FB token");
		it("Should not return anything for a non-valid ID");
		it("should not return private access tokens");
	});
})
