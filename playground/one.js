

var async=(a,b)=>{

	return new Promise((resolve,reject)=>{
			var result=a+b;
			if(result){
				resolve(result);
			}

		});

	
}


async(20,10).then((ress)=>{
	console.log(ress);
}).catch((e)=>{
	console.log(e);
});