let utils = require('../../utils.js');
let should = require(`should`);
let UserAuthenticationConfirmationService = require('../../../services/user/UserAuthenticationConfirmationService.js');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe.only("User Authentication Confirmation Service",()=>{

		beforeEach((done)=>{
			let date = new Date();

			Register.create({
				generatedLocalID:"bram",
				fbUserID:"stark",
				fbAccessToken:"EAAD9MVQUt54BAAyE49FtBH1V5swiDJFZBNnZAUBcntuPwYCxwAHNUEOOyu9piQvdZB32j3fZCUgaNmQXtldeqsapVn8BmuZABqIGZA7QPskaRRybHtb01YZBzZBun3io9ZBA8JPZBxUjT7u20ZAvh4qcqagz9nkJxnIC12OTkFHjqK0RwZDZD",
				ts:date
			}, done);

		});

		it("Should return true only if the provided FB access token is valid for the given user ID",(done)=>{
			UserAuthenticationConfirmationService.ConfirmValidation("stark","EAAD9MVQUt54BAAyE49FtBH1V5swiDJFZBNnZAUBcntuPwYCxwAHNUEOOyu9piQvdZB32j3fZCUgaNmQXtldeqsapVn8BmuZABqIGZA7QPskaRRybHtb01YZBzZBun3io9ZBA8JPZBxUjT7u20ZAvh4qcqagz9nkJxnIC12OTkFHjqK0RwZDZD")
			/*.then((res)=>{
				res.isValid.should.be.true();
				done();
			})*/
		});
})
