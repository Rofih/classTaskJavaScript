let number=[1,2,34,5,6,89];
let largest =number[0];
for(let counter=0;counter<number.length;counter++){
	if(largest<number[counter]){
		largest=number[counter];
	}
}
console.log(largest)