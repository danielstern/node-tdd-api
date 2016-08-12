let Request = require('request');
let graphURLStub = `https://graph.facebook.com/me?access_token=`;

// this works as is... but how to test it?
class FacebookVerificationService{
	VerifyTokenAuthenticityWithFacebookAPI(fbUserID, fbAccessToken) {
		return new Promise((resolve)=>{
			Request.get(graphURLStub + fbAccessToken, (res, b)=>{
				console.log("Facebook replies");
				console.log(res, b.body);
				resolve(b.body);
			})
		})

		// all validation happens with the FBaccess token
		// a request is valid only if the auth matches the key at the time of the last login
		//let p1 =
	}
}

module.exports = new FacebookVerificationService();
