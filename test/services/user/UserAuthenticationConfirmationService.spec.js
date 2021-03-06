let mock = require('mock-require');
let mockFBService = require('../../../services/mocks/facebook-verification-service.mock.js');
mock('../../../services/facebook-verification-service', mockFBService);

let utils = require('../../utils.js');
let should = require(`should`);
let UserAuthenticationConfirmationService = require('../../../services/user/UserAuthenticationConfirmationService.js');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe("User Authentication Confirmation Service",()=>{

		beforeEach((done)=>{
			let date = new Date();

			mockFBService.MockupUserIDAndAccessToken("stark","summer");

			Register.create({
				generatedLocalID:"bram",
				fbUserID:"stark",
				fbAccessToken:"summer",
				ts:date
			}, done);

		});

		it("Should return true only if the provided FB access token is valid for the given user ID",(done)=>{
			UserAuthenticationConfirmationService.ConfirmValidation("stark","summer")
			.then((valid)=>{
				valid.should.be.true();
				done();
			})
		});

		it("Should return false if not verified by Facebook",(done)=>{
			UserAuthenticationConfirmationService.ConfirmValidation("stark","grey wind")
			.then((valid)=>{
				valid.should.not.be.true();
				done();
			})
			.catch((e)=>{
				console.error(e);
			})
		});
})
