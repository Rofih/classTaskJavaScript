let earnings = [20_00,1000,50_000,20_000];
let tax = [];
for(let index = 0;index<earnings.length;index++){
	if(earnings[index]<30_000){
		tax[index] = 0.15*earnings[index];	
	}
	else{
		tax[index]=0.20*earnings[index];
	}
}
for(let display = 0;display<tax.length;display++){
	console.log(tax[display])
}