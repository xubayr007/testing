var mongoose=require('mongoose');
const{usermodel}=require('./models/user');
var express=require('express');
const bodyparser=require('body-parser');
const _=require('lodash');

var app=express();

app.use(bodyparser.json());


app.post('/usercreate',(req,res)=>{

	var body=_.pick(req.body,['username','firstname','address']);

	var newUser=new usermodel(body);

	newUser.save().then((result)=>{
		res.send(result);
	}).catch((e)=>{
		res.send(e);
	});


});

app.get('/users',(req,res)=>{

	usermodel.find().then((result)=>{

		res.send(result);
	}).catch((e)=>{
		res.send(e);
	});


});

app.get('/users/:id',(req,res)=>{

	var id=req.params.id;
	usermodel.findById(id).then((result)=>{
		//res.send(resluts._id.getTimestamp());
		res.send({'Created on':result._id.getTimestamp(),result});
	}).catch((e)=>{
		res.send(e);
	});


});

app.put('/users/:id',(req,res)=>{
	var id =req.params.id;
	usermodel.findByIdAndUpdate(id,{$set:
		{username:req.body.username,
		firstname:req.body.firstname,
		address:req.body.address}},{new:true}).then((result)=>{
			res.send(result);
		}).catch((e)=>{
			res.send(e);
		});

});





app.listen(3000,()=>{
	console.log('server listening on port 3000');
})