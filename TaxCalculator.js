let earnings = [20_00,1000,50_000,20_000];
let tax = [];
for(let count = 0;count<earnings.length;count++){
	if(earnings[count]<30_000){
		tax[count] = 0.15*earnings[count];	
	}
	else{
		tax[count]=0.20*earnings[count];
	}
}
