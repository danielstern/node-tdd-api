let utils = require('../../utils.js');
let should = require(`should`);
describe("User Facebook Login Event Model",()=>{
	it("Should create a new login event",(done)=>{
		let Login = require('../../../models/userEvent/user-facebook-login.js').model;
		let date = new Date();

		let loginEvent = {
			localUserID:"ABC",
			fbUserID:"123",
			fbAccessToken:"99RBalloon",
			ts:date
		};

		Login.create(loginEvent, function (err, createdLoginEvent) {
			should.not.exist(err);
			createdLoginEvent.localUserID.should.equal('ABC');
			createdLoginEvent.fbUserID.should.equal('123');
			createdLoginEvent.ts.should.equal(date);
			done();
		});


	})
})
