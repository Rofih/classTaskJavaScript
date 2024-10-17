const grades = {
	math : 90,
	english : 85,
	chemistry : 95,


};
for(const key in grades){
	console.log(`${key} = ${grades[key]}`);
}