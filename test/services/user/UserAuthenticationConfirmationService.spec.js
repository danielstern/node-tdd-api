let utils = require('../../utils.js');
let should = require(`should`);
let UserAuthenticationConfirmationService = require('../../../services/user/UserAuthenticationConfirmationService.js');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe("User Authentication Confirmation Service",()=>{

		beforeEach((done)=>{
			let date = new Date();

			Register.create({
				generatedLocalID:"bram",
				fbUserID:"stark",
				fbAccessToken:"summer",
				ts:date
			}, done);

		});

		it("Should return true only if the provided FB access token is valid for the given user ID",(done)=>{
			UserAuthenticationConfirmationService.ConfirmValidation({
				localID:"bram",
				fbAccessToken:"summer"
			})
			.then((res)=>{
				res.isValid.should.be.true();
				done();
			})
		});
})
