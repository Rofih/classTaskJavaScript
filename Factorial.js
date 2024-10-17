let number = 10;
let count = number;
let factor = 1;
while(count!=1){
	factor *=count;
	count--;

	if(factor>1000){
	console.log(factor/(count+1))
		break;
	
	}else{
		console.log(factor)
	}
		
}
