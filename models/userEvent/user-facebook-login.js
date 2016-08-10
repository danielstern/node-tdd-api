let mongoose = require(`mongoose`);

let UserFacebookLogin = mongoose.model(`UserFacebookLogin`, {
	localUserID:String,
	fbUserID:String,
	accessToken:String,
	ts:Date
});

module.exports = {
	model:UserFacebookLogin
}
