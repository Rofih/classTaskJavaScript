function isLeapYear(year){
	if(year%100==0){
		if(year%400==0){
			return true;
		}
		else{
			return false;
		}
	}
	if(year%4==0){
		return true;
	}
	else{
		return false;
	}		
}
console.log(isLeapYear(1994))