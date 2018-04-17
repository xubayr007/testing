
const{mongoose}=require('../db/mongoose');


var userSchema=new mongoose.Schema({

	username:{
		type:String,
		required:true
	},

	firstname:{
		type:String,
		required:true
	},

	address:{
		type:String,
		reuired:true
	}


});

var usermodel=mongoose.model('user',userSchema);


module.exports={usermodel};