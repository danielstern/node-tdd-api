let auth = require('../../services/user/UserAuthenticationConfirmationService');
let ContentCreationService = require("../../services/content/content-creation-service.js");
module.exports = (app)=>{
	//console.log("Applying route: content create route")
	app
		.post('/content/create',(req,res)=>{
			auth.ConfirmValidation(req.body.ownerFBUserID,req.body.fbAccessToken)
			.then((isValid)=>{
				if (isValid) {
					ContentCreationService.CreateContent(req.body.ownerFBUserID, req.body.content)
					.then(()=>{
						res.status(200).send();
					});
				} else {
					res.status(403).send();
				}
			})
			.catch((e)=>{
				console.log(e);
			})
		})
}
