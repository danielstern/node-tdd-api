
module.exports = (app)=>{
	console.log("Applying route: content create route")
	app
		.post('/content/create',(req,res)=>{
			console.log("Posted to create");
			res.status(200).json({id:"m125548"});
		})
		.get('/',(req,res)=>{
			res.status(200).json({a:"test"});
		})
}
