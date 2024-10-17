const readline = require ("readline");
const entry = readline.createInterface({

input: process.stdin,
output: process.stdout

});


entry.question("enter a number:",(number)=>{


let digit = number;
digit = digit % 10
console.log("the last number is" + digit)


entry.close();

})

