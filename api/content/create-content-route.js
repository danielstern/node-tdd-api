
module.exports = (app)=>{
	console.log("Applying route: content create route")
	app
		.post('/content/create',(req,res)=>{
			console.log("Posted to create",req.body);
			// TODO - insert service for checking user fb token authentication
			res.status(200).json({id:"m125548"});
		})
}
