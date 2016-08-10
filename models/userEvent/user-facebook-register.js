let mongoose = require(`mongoose`);

let UserFacebookRegister = mongoose.model(`UserFacebookRegister`, {
	generatedLocalID:String,
	fbUserID:String,
	fbAccessToken:String,
	ts:Date
});

module.exports = {
	model:UserFacebookRegister
}
