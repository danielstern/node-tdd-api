class ContentCreationService {
	CreateContent(ownerFBUserID,content){
		return new Promise((resolve)=>{
			let ContentCreate = require('../../models/content/content-create.js').model;
			let date = new Date();

			let contentEvent = {
				ownerFBUserID:ownerFBUserID,
				content:content,
				ts:date
			}

			ContentCreate.create(contentEvent, function (err, contentCreationEvent) {
				resolve();
			});

		});
	}
}

module.exports = new ContentCreationService();
