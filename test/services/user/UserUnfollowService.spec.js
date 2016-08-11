let utils = require('../../utils.js');
let should = require(`should`);
let UserFollowCreationService = require('../../../services/user/UserFollowerCreationService.js');
let UserUnfollowService = require('../../../services/user/UserUnfollowService.js');
let UserFollowRetreivalService = require('../../../services/user/UserFollowerRetreivalService');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe("User Unfollow Service",()=>{
	beforeEach((done)=>{
		let date = new Date();

		Register.create([{
			generatedLocalID:"bram",
			fbUserID:"stark",
			fbAccessToken:"summer",
			ts:date
		}, {
			generatedLocalID:"jon",
			fbUserID:"snow",
			fbAccessToken:"ghost",
			ts:date
		}], done);

	});

	it("Should remove a following relationship",(done)=>{
		UserFollowCreationService.CreateFollowRelationship("bram","jon")
		.then((rel)=>{
			return UserUnfollowService.InvalidateFollowRelationship("bram","jon");
		})
		.then(()=>{
			return UserFollowRetreivalService.GetFollowers("jon");
		})
		.then((followers)=>{
			followers.length.should.equal(0);
			done();
		})
		.catch((e)=>{
			console.error(e);
		})
	});

	it("Should remove a following relationship while not affecting others",(done)=>{
		UserFollowCreationService.CreateFollowRelationship("bram","jon")
		.then(()=>{
			UserFollowCreationService.CreateFollowRelationship("sansa","jon")
		})
		.then(()=>{
			return UserUnfollowService.InvalidateFollowRelationship("sansa","jon");
		})
		.then(()=>{
			return UserFollowRetreivalService.GetFollowers("jon");
		})
		.then((followers)=>{
			followers.length.should.equal(1);
			followers.should.containDeep(["bram"]);
			done();
		})
		.catch((e)=>{
			console.error(e);
		})
	});

})
