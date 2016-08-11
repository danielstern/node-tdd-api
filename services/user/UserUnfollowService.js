let UnfollowUser = require('../../models/userEvent/user-unfollow-user.js').model;
class UserUnfollowService {
	InvalidateFollowRelationship(followerLocalID, followeeLocalID){
		let promise = new Promise((resolve,reject)=>{

			let ts = new Date();

			let unfollowUserEvent = {
				followerLocalID,
				followeeLocalID,
				ts
			};

			UnfollowUser.create(unfollowUserEvent, (err,rel)=>{
				resolve(rel);
			});
		});

		return promise;
	}
}

module.exports = new UserUnfollowService()
