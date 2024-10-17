const checklist = {
	"groceries" : 150,
	"dining out" : 100,
	"transportation" : 50,
	"entertainment" : 80,

};
let totalAmount = 0;
for(const keys in checklist){
	totalAmount += checklist[keys];
}
console.log(totalAmount)
