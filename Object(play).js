const person = {
	firstName : "Rofih",
	lastName: "Ade",
	age : 17,
	hobbies : ["football","eating","reading"]
};
person.sex = "male";
person.lastName = "olamide";
//console.log(person.firstName + " " + person.lastName)


const information = {
	id : "3r35te6",
	available : true  ,
	count : 2,
	name : "Cell Theory",
	author : "Charles Dawin",

};
information.name = "Father of Cells";
//console.log(information)

let balance = 200;

let amount = 1000;

if(amount > balance){
	//console.log("sapa dey")
}
else{
	//console.log("sapa no dey")
}

let result = (amount < balance)? "sapa dey": "sapa no dey";
console.log(result)