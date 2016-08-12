var mockId;
var mockToken;
class MockFacebookVerificationService{
	MockupUserIDAndAccessToken(fbUserID, fbAccessToken) {
		mockId = fbUserID;
		mockToken = fbAccessToken;
	}
	VerifyTokenAuthenticityWithFacebookAPI(fbUserID, fbAccessToken) {
		//console.log("Mock verify authenticity");
		return new Promise((resolve)=>{
			if (fbUserID === mockId && fbAccessToken == mockToken) {
				resolve({id:mockId});
			}
			else
			{
				resolve({error:"abc"});
			}
		});

	}
}


module.exports = new MockFacebookVerificationService();
