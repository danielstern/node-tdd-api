let mongoose = require(`mongoose`);

let ContentCreate = mongoose.model(`ContentCreate`, {
	ownerLocalUserID:String,
	content: {
		text:String
	},
	ts:Date
});

module.exports = {
	model:ContentCreate
}
