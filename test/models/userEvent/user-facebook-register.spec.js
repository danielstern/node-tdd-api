let utils = require('../../utils.js');
let should = require(`should`);
describe("User Facebook Register Event",()=>{
	it("Should create a new register event",(done)=>{
		let Register = require('../../../models/userEvent/user-facebook-register.js').model;
		let date = new Date();

		let registerEvent = {
			generatedLocalID:"Alpha",
			fbUserID:"Centauri",
			accessToken:"Rigel7",
			ts:date,
		};

		Register.create(registerEvent, function (err, createdRegisterEvent) {
			should.not.exist(err);
			createdRegisterEvent.generatedLocalID.should.equal('Alpha');
			createdRegisterEvent.fbUserID.should.equal('Centauri');
			createdRegisterEvent.ts.should.equal(date);
			done();
		});


	})
})
