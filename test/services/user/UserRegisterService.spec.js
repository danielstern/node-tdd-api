let utils = require('../../utils.js');
let should = require(`should`);
let Register = require('../../../models/userEvent/user-facebook-register.js').model;
let RegisterService = require('../../../services/user/UserRegisterService');

describe("User Register Service",()=>{

	it("Should register a user if valid",(done)=>{
		RegisterService.RegisterUserFromFBLogin("abc","123")
		.then((record)=>{
			Register.findOne({fbUserID:"abc"},(err,res)=>{
				should.not.exist(err);
				//console.log(res);
				res.fbUserID.should.equal("abc");
				res.fbAccessToken.should.equal("123");
				done();

			})
		})
		.catch((e)=>{
			console.error(e);
		})
	});

});
