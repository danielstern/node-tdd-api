let utils = require('../../utils.js');
let should = require(`should`);
describe("User Unfollow User Event Model",()=>{
	it("Should create a new unfollow event",(done)=>{
		let UnfollowUser = require('../../../models/userEvent/user-unfollow-user.js').model;
		let date = new Date();

		let unfollowUserEvent = {
			followerLocalID:"Jorah",
			followeeLocalID:"Danaerys",
			ts:date
		};

		UnfollowUser.create(unfollowUserEvent, function (err, createdunfollowEvent) {
			should.not.exist(err);
			createdunfollowEvent.followerLocalID.should.equal('Jorah');
			createdunfollowEvent.followeeLocalID.should.equal('Danaerys');
			createdunfollowEvent.ts.should.equal(date);
			done();
		});


	})
})
