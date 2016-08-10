let utils = require('../../utils.js');
let should = require(`should`);
let UserFollowService = require('../../../services/user/UserInfoService');
let Register = require('../../../models/userEvent/user-facebook-register.js').model;

describe("User Follower Retreival Service",()=>{
	describe("Get User Followers",()=>{
		beforeEach((done)=>{
			let date = new Date();

			Register.create({
				generatedLocalID:"bram",
				fbUserID:"stark",
				fbAccessToken:"summer",
				ts:date
			});

			Register.create({
				generatedLocalID:"jon",
				fbUserID:"snow",
				fbAccessToken:"ghost",
				ts:date
			});

			Register.create({
				generatedLocalID:"sansa",
				fbUserID:"bolton",
				fbAccessToken:"lady",
				ts:date
			});

		});

		// TODO - implement after adding createFollowMethod
		it("Should return a promise resolving to all the users following a specific user"/*,(done)=>{

			UserFollowService.getFollowers("bram");


		}*/);
	});
})
