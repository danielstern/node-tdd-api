let utils = require('../../utils.js');
let should = require(`should`);
let assert = require('assert');
let UserService = require('../../../services/user/UserInfoService');
describe("User Authentication Service",()=>{
	describe("Get User User Data",()=>{
		beforeEach((done)=>{
			let Login = require('../../../models/userEvent/user-facebook-login.js').model;
			let date = new Date();

			let loginEvent = {
				localUserID:"Greedo",
				fbUserID:"Anakin",
				fbAccessToken:"Skywalker",
				ts:date
			};

			Login.create(loginEvent, function (err, createdLoginEvent) {
				should.not.exist(err);
				done();
			});

		});

		it("Should provide the correct user id for a valid FB token",(done)=>{
			let token = "Skywalker";
			UserService.GetUserID(token).then((id)=>{
				id.should.equal("Greedo");
				done();
			}).
			catch((e)=>{
				console.log("ERROR WILL ROBINSON!");
			});
		});

		it("Should not return anything for a non-valid ID",(done)=>{
			UserService.GetUserID("Vader").then((userInfo)=>{
				should.not.exist(userInfo);
				done();
			})
		});

	});
})
