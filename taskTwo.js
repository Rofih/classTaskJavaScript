const readline = require ("readline");
const entry = readline.createInterface({

input: process.stdin,
output: process.stdout

});


entry.question("enter a number to check if divisible by 7:",(number)=>{


let value = number;
if(value % 7 == 0){
	console.log("it is divisible")
}
else{
	console.log("it is not divisible")
}






entry.question("enter a number to check if multiple of 3:",(number)=>{


let value = number;
if(value % 3 == 0){
	console.log("hello")
}
else{
	console.log("bye")
}

entry.close();
})





})

