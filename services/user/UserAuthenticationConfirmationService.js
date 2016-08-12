let Register = require('../../models/userEvent/user-facebook-register.js').model;
let Login = require('../../models/userEvent/user-facebook-login.js').model;
let Request = require('request');

let graphURLStub = `https://graph.facebook.com/me?access_token=`;
// TO DO - implement service for login and register
class UserAuthenticationConfirmationService {
	constructor() {

	}

	ConfirmValidation(fbUserID, fbAccessToken) {
		// all validation happens with the FBaccess token
		// a request is valid only if the auth matches the key at the time of the last login
		//let p1 =

	}
}

module.exports = new UserAuthenticationConfirmationService();
