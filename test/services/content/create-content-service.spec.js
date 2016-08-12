let ContentCreationService = require("../../../services/content/content-creation-service.js");
let ContentCreate = require('../../../models/content/content-create.js').model;

let utils = require('../../utils.js');
let should = require(`should`);
describe("Content create service",()=>{
	it("should create content",(done)=>{
		ContentCreationService.CreateContent("bram","winterfell!")
		.then(()=>{
			ContentCreate.findOne({ownerFBUserID:"bram"},(err,res)=>{
				res.ownerFBUserID.should.equal("bram");
				done();
			})
		})
	});
})
