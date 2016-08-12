let auth = require('../../services/user/UserAuthenticationConfirmationService')
module.exports = (app)=>{
	//console.log("Applying route: content create route")
	app
		.post('/content/create',(req,res)=>{
			//console.log("Posted to create",req.body);
			auth.ConfirmValidation(req.body.ownerFBUserID,req.body.fbAccessToken)
			.then((isValid)=>{
				if (isValid) {
					res.status(200).json({});
				} else {
					res.status(403).send();
				}
			})
			// TODO - insert service for checking user fb token authentication

		})
}
