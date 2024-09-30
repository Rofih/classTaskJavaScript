let priceSales = [5_000,2_000,50_000];
let salesCommission = [];
for(let count = 0;count<priceSales.length;count++){
	salesCommission[count]=(0.09*priceSales[count])+200;
	console.log(salesCommission[count])
}

