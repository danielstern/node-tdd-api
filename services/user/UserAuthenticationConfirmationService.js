let Register = require('../../models/userEvent/user-facebook-register.js').model;
let Login = require('../../models/userEvent/user-facebook-login.js').model;
let FacebookVerificationService = require('../facebook-verification-service');



// TO DO - implement service for login and register
class UserAuthenticationConfirmationService {

	ConfirmValidation(fbUserID, fbAccessToken) {
		return new Promise((resolve)=>{
			FacebookVerificationService.VerifyTokenAuthenticityWithFacebookAPI(fbUserID, fbAccessToken)
			.then((res)=>{
				if (res.id === fbUserID) {
					resolve(true);
				} else {
					resolve(false);
				}
			})
			.catch((e)=>{
				console.error(e);
			});
		})

		// all validation happens with the FBaccess token
		// a request is valid only if the auth matches the key at the time of the last login
		//let p1 =

	}
}

module.exports = new UserAuthenticationConfirmationService();
