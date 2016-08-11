let FollowUser = require('../../models/userEvent/user-follow-user.js').model;
class UserFollowRetreivalService {
	GetFollowers(followeeLocalID){
		return new Promise((resolve,reject)=>{
			FollowUser.find({followeeLocalID},(err, followers)=>{
				resolve(followers);
			})
		});
	}
}

module.exports = new UserFollowRetreivalService();
