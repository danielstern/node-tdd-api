let utils = require('../../utils.js');
let should = require(`should`);
let route = require('../../../api/content/create-content-route');
let express = require('express');
//let request = require('request');
let request = require('supertest');
let port = 7777;
let bp = require('body-parser');

describe.only	("Content creation API route",()=>{
	let appLocale = `https://localhost:${port}`;
	it("should create the appropriate content in the DB when a GET request is made",(done)=>{
		let app = express();

		route(app);
		app.use(bp.json());
		app.use(bp.urlencoded({
			extended:false
		}));

		request(app)
			.post('/content/create')
			.send({
				localUserID:"abc",
				fbAccessToken:"123",
				content:
				{
					text:"win"
				}
			})
			//.expect(200)
			.expect(function(err,res){
				console.log('expect...',err.body);
			})
			.end(done);

		});
	})


/*
		request(app)
			.get('/')
			//.expect(200)
			.expect(function(err,res){
				console.log('expect...',err.body);
			})
			.end(done);
			*/
/*
		app.listen(port,(e)=>{
			console.log(`App listening on port ${port}`,e);
			let requestURL = appLocale+'/content/create';
			console.log(requestURL);
*/

			/*request.get(appLocale,(res)=>{
				console.log(res);
				done();
			})
*/
	//	request.post({url:requestURL,formData:{content:"Use the force"}},(err,res,body)=>{
	//		console.log(err,res,body);
	//		done();
	//	});
			//request.post(requestURL,{content:"Hello world"},(res)=>{
			//	console.log("Body?",res);
			//	done();
				//should.fail();
		//	})
