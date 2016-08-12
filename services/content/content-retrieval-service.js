let ContentCreate = require('../../models/content/content-create').model;
class ContentRetrievalService{
	RetrieveContent(...userIds) {
		return new Promise((resolve)=>{
			ContentCreate.find({
			    ownerFBUserID: { $in: userIds }
			}, function(err, docs){
	//		     console.log(docs);
				 resolve(docs);
			});
		})


	}
}

module.exports = new ContentRetrievalService();
