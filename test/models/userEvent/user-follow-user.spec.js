let utils = require('../../utils.js');
let should = require(`should`);
describe("User Follow User Event",()=>{
	it("Should create a new register event",(done)=>{
		let FollowUser = require('../../../models/userEvent/user-follow-user.js').model;
		let date = new Date();

		let followUserEvent = {
			followerLocalID:"SamTarly",
			followeeLocalID:"JonSnow",
			ts:date
		};

		FollowUser.create(followUserEvent, function (err, createdFollowEvent) {
			should.not.exist(err);
			createdFollowEvent.followerLocalID.should.equal('SamTarly');
			createdFollowEvent.followeeLocalID.should.equal('JonSnow');
			createdFollowEvent.ts.should.equal(date);
			done();
		});


	})
})
