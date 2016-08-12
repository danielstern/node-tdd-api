let bp = require('body-parser');
let express = require('express');

module.exports = ()=>{
	let app = new express();
	app.use(bp.json());
	app.use(bp.urlencoded({
		extended:false
	}));
	return app;
}
