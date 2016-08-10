let assert = require('chai').assert;
let utils = require('../../utils.js');
let should = require(`should`);
describe("User Facebook Login Event Model",()=>{
	it("Should create a new login event",(done)=>{
		let model = require('../../../models/userEvent/user-facebook-login.js').model;

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
			done();
		});


	})
})
