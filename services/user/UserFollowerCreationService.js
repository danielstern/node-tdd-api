let FollowUser = require('../../models/userEvent/user-follow-user.js').model;
class UserFollowCreationService {
	CreateFollowRelationship(followerLocalID, followeeLocalID){
		let promise = new Promise((resolve,reject)=>{

			let date = new Date();

			let followUserEvent = {
				followerLocalID:followerLocalID,
				followeeLocalID:followeeLocalID,
				ts:date
			};

			FollowUser.create(followUserEvent, (err,rel)=>{
				resolve(rel);
			});
		});

		return promise;
	}
}

module.exports = new UserFollowCreationService()
