const file = {
	name : "Olamide",
	age : 30,
	city : "Lagos",
};
let count = 0;
for(const items in file){
	count++
}
console.log(count)