let mongoose = require(`mongoose`);

let FollowUser = mongoose.model(`FollowUser`, {
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
	model:FollowUser
}
