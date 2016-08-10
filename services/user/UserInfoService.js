

class UserInfoService {
	constructor(){

	}

	GetUserID(fbAccessToken){
		console.log("Get user id",fbAccessToken);
		let deferred = new Promise((resolve,reject)=>{
			AggregateUserID(fbAccessToken)
			.then((userID)=>{
				console.log("resolve inside promise");
				resolve(userID);
			})
			.catch((e)=>{
				console.log("Caught error",e);
			})
		})

		return deferred;
	}
}

function AggregateUserID(fbAccessToken) {

	let deferred = new Promise((resolve,reject)=>{
		let Login = require('../../models/userEvent/user-facebook-login.js').model;
	//	console.log("Finding login model");
		Login.find({fbAccessToken},(err,logins)=>{
			console.log("Found",logins);
			if (logins.length == 0) {
				resolve(null);
				return;
			}
			let n = logins[0].localUserID;
			resolve(n);
		});
	})


	return deferred;
}



module.exports=  new UserInfoService();
