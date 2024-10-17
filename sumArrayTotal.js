
function sumArray(array){
	let total = 0;
	for(let count = 0;count<array.length;count++){
		total += array[count];
	}
	return total;
}

console.log(sumArray([1,2,3,4,5]))

