let word = 'hello world';
let counter = 0;
for(let count = 0;count<word.length;count++){
	if(word.charAt(count)=='a'||word.charAt(count)== 'e'||word.charAt(count)== 'i'||word.charAt(count)== 'o'||word.charAt(count)== 'u'){
		counter++
	}

}
console.log(counter)