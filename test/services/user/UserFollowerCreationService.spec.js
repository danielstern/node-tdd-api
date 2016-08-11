let utils = require('../../utils.js');
let should = require(`should`);
let UserFollowCreationService = require('../../../services/user/UserFollowerCreationService.js');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe("User Follower Creation Service",()=>{
	describe("Create a Follower Relationship",()=>{
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

		// TODO - implement after adding createFollowMethod
		it("Should create a follower relationship given two valid user IDs",(done)=>{
			UserFollowCreationService.CreateFollowRelationship("bram","jon")
			.then((rel)=>{
				console.log(rel);
				rel.followerLocalID.should.equal("bram");
				rel.followeeLocalID.should.equal("jon");
				console.log("Calling done");
				done();
			})
			.catch((e)=>{
				console.error(e);
			})
			//UserFollowService.getFollowers("bram");
		});
	});
})
