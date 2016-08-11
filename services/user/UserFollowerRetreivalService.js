let FollowUser = require('../../models/userEvent/user-follow-user.js').model;
let UnfollowUser = require('../../models/userEvent/user-unfollow-user.js').model;
let d3 = require('d3');
let _ = require('lodash');
class UserFollowRetreivalService {
	GetFollowers(followeeLocalID){
		return new Promise((resolve,reject)=>{
			FollowUser.find({followeeLocalID},(err, followEvents)=>{
				UnfollowUser.find({followeeLocalID},(err, unfollowEvents)=>{

					// for each follower,
					let uniqueFollowerIDs = _.uniq(followEvents.map(f=>f.followerLocalID));
				//	console.log("Unique ids?",uniqueFollowerIDs);
			//		console.log("follow events?",followEvents);
			//		console.log("unfollow events?",unfollowEvents);


					//let followers =
					let followers = uniqueFollowerIDs
					.filter((followerLocalID)=>{
						//if ()

						// return true only if the date of the follower's last follow is greater than that of the last Unfollow
						let latestFollowDate = d3.max(followEvents
							.filter(f=>f.followerLocalID === followerLocalID)
							.map(f=>f.ts)
						);

						let latestUnfollowDate = d3.max(unfollowEvents
							.filter(f=>f.followerLocalID === followerLocalID)
							.map(f=>f.ts)
						);

//						console.log("Compare...",latestFollowDate,latestUnfollowDate);
						if (!latestUnfollowDate) {
							return true;
						} else {
							return latestFollowDate > latestUnfollowDate;
						}
					});
			//		console.log("Followers",followers);

					resolve(followers);
				})
				//resolve(followers);
			})
		});
	}
}

module.exports = new UserFollowRetreivalService();
