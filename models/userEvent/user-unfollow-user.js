let mongoose = require(`mongoose`);

let UnfollowUser = mongoose.model(`UnfollowUser`, {
	followerLocalID:{
		type:String,
		required:true
	},
	followeeLocalID:{
		type:String,
		required:true
	},
	ts:Date
});

module.exports = {
	model:UnfollowUser
}
