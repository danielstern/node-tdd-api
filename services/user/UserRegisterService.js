let Register = require('../../models/userEvent/user-facebook-register.js').model;

class UserRegisterService {

	RegisterUserFromFBLogin(fbUserID, fbAccessToken) {

		let p = new Promise((resolve)=>{
			let date = new Date();
			Register.create({
				// to do - validate local id
				generatedLocalID:"bram"+date,
				fbUserID:fbUserID,
				fbAccessToken:fbAccessToken,
				ts:date
			},(err,record)=>{
				//console.log("User registered",err,record);
				resolve(record);
			})
		})

		return p;
	}
}

module.exports = new UserRegisterService();
