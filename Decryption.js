const readline = require("readline");
const entry = readline.createInterface({

input: process.stdin,
output: process.stdout

});


entry.question("enter a number to be decrypted:",(number)=>{

let value = number;
  	   let value1=value%10;
           let value2=value//10;
           let value3=value2%10;
           let value4=value2//10;


           let encryption = (value1+7)%10;
           let encryption1 = (value2+7)%10;
           let encryption2 = (value3+7)%10;
           let encryption3 = (value4+7)%10;

           let decrypted = (encryption*1000)+(encryption1*100)+(encryption2*10)+encryption3;

           console.log(decrypted);

entry.close();



})

