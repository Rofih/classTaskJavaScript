let reverse = 0;
let remainder=0;
let reverse=0;
let add=0;
while(number!=0){
	remainder=number%10;
	reverse=(reverse*10)+remainder;
	number=number/10;
	add+=remainder;
}
if(number==remainder){
	console.log("it is a palindrome")
}
else{
	console.log("it is not a palindrome")
}