let utils = require('../../utils.js');
let should = require(`should`);
describe("Content creation model",()=>{
	it("Should create a new content creation event",(done)=>{
		let ContentCreate = require('../../../models/content/content-create.js').model;
		let date = new Date();

		let contentEvent = {
			ownerLocalUserID:"TryionLannister",
			content: {
				text:"More wine, please."
			},
			ts:date
		}

		ContentCreate.create(contentEvent, function (err, contentCreationEvent) {
			should.not.exist(err);
			contentCreationEvent.ownerLocalUserID.should.equal('TryionLannister');
			contentCreationEvent.content.text.should.equal('More wine, please.');
			contentCreationEvent.ts.should.equal(date);
			done();
		});


	})
})
