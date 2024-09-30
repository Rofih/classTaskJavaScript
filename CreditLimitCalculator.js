const information = {
	accountNumber : 09234354,
	balanceBeginningOfMonth : 1900,
	totalChargesOfItems : 200,
	credits : 300,
	allowedCreditLimit : 250,
};

let newBalance = information.balanceBeginningOfMonth + information.totalChargesOfItems - information.allowedCreditLimit;

console.log(newBalance)