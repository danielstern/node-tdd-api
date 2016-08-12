let Register = require('../../../models/userEvent/user-facebook-register.js').model;
let ContentCreate = require('../../../models/content/content-create.js').model;
let utils = require('../../utils.js');
let should = require(`should`);
let ContentRetrieval = require(`../../../services/content/content-retrieval-service.js`)

describe("The content Retrieval service",()=>{
	beforeEach((done)=>{
		let date = new Date();

		Register.create([{
			generatedLocalID:"bram",
			fbUserID:"stark",
			fbAccessToken:"summer",
			ts:date
		},{
			generatedLocalID:"cersei",
			fbUserID:"lannister",
			fbAccessToken:"gold",
			ts:date
		}],()=>{
//			let contentEvent =
			ContentCreate.create([{
				ownerFBUserID:"stark",
				content: {
					text:"Winterfell!"
				},
				ts:date
			},{
				ownerFBUserID:"cersei",
				content: {
					text:"Casterly Rock!"
				},
				ts:date
			}], function (err, contentCreationEvent) {
				should.not.exist(err);
				done();
			});
		});

	});
	it("should retreive content for a single user",(done)=>{
		ContentRetrieval.RetrieveContent("stark")
		.then((content)=>{
			content.length.should.equal(1);
		})
	});
	it("should retrieve content for multiple users",(done)=>{
		ContentRetrieval.RetrieveContent("stark","lannister")
		.then((content)=>{
			content.length.should.equal(2);
		})
	})
})
