var mockId;
var mockToken;
class MockFacebookVerificationService{
	MockupUserIDAndAccessToken(fbUserID, fbAccessToken) {
		mockId = fbUserID;
		mockToken = fbAccessToken;
	}
	VerifyTokenAuthenticityWithFacebookAPI(fbUserID, fbAccessToken) {
		return new Promise((resolve)=>{
				if (fbUserID === mockId) {
					resolve({id:mockId});
				}
				else
				{
					resolve({error:"abc"});
				}

			})
		})
	}
}

module.exports = new MockFacebookVerificationService();
