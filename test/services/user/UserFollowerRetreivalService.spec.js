let utils = require('../../utils.js');
let should = require(`should`);
let UserFollowCreationService = require('../../../services/user/UserFollowerCreationService');
let UserFollowRetreivalService = require('../../../services/user/UserFollowerRetreivalService');
let UserUnfollowService = require('../../../services/user/UserUnfollowService.js');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe("User Follower Retreival Service",()=>{

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
			followers.should.containDeep(["sansa","bram"]);
			done();
		})
		.catch((e)=>{
			//console.log("An error?",e);

		});

	});

	it ("Should accurately aggregate a follow, unfollow then follow again",(done)=>{

		UserFollowCreationService.CreateFollowRelationship("bram","jon")
		.then(()=>{
			return delay(5);
		})
		.then(()=>{
			return UserUnfollowService.InvalidateFollowRelationship("bram","jon");
		})
		.then(()=>{
			return UserFollowRetreivalService.GetFollowers("jon");
		})
		.then((followers)=>{
			followers.should.not.containDeep(["bram"]);
			return delay(5);
		})
		.then(()=>{
			return UserFollowCreationService.CreateFollowRelationship("bram","jon")
		})
		.then(()=>{
			return UserFollowRetreivalService.GetFollowers("jon");
		})
		.then((followers)=>{
			followers.should.containDeep(["bram"]);
			done();
		})
	})
});
let delay = ms => new Promise(r => setTimeout(r, ms));
