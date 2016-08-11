let utils = require('../../utils.js');
let should = require(`should`);
let UserFollowCreationService = require('../../../services/user/UserFollowerCreationService');
let UserFollowRetreivalService = require('../../../services/user/UserFollowerRetreivalService');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe("User Follower Retreival Service",()=>{
	describe("Get User Followers",()=>{
		beforeEach((done)=>{
			let date = new Date();
			Register.create([{
				generatedLocalID:"bram",
				fbUserID:"stark",
				fbAccessToken:"summer",
				ts:date
			},
			{
				generatedLocalID:"jon",
				fbUserID:"snow",
				fbAccessToken:"ghost",
				ts:date
			},{
				generatedLocalID:"sansa",
				fbUserID:"bolton",
				fbAccessToken:"lady",
				ts:date
			}],done);

		});

		it("Should return a promise resolving to all the users following a specific user",(done)=>{
			UserFollowCreationService.CreateFollowRelationship("bram","jon")
			.then((rel,err)=>{
				return UserFollowCreationService.CreateFollowRelationship("sansa","jon");
			})
			.then(()=>{
				return UserFollowRetreivalService.GetFollowers("jon");
			})
			.then((followers)=>{
				//console.log("Followers?",followers);
				followers.map(r=>r.followeeLocalID).every(f=>f=="jon").should.be.true();
				followers.map(r=>r.followerLocalID).should.containDeep(["sansa","bram"]);
				done();
			})
			.catch((e)=>{
				console.log("An error?",e);

			});

		});
	});
});
