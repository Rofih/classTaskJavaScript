let gallons = [50,20,30,40];
let milesDriven = [10,20,30,70];
let milesPerGallon = [];
let totalMilesPerGallon = 0;

for(let count=0;count<gallons.length;count++){
	milesPerGallon[count] = milesDriven[count]/gallons[count];
	totalMilesPerGallon+=milesPerGallon[count];
	console.log(milesPerGallon[count]) 
}
console.log(totalMilesPerGallon)

