const numbers = [456, -20, 33, 476, 999, 62, 7, -100, 10];

/* For all the following exercises:
		- make sure to print out the result to ensure you get the correct answers
		- use the for...of loop for all the for loop examples
*/

//sorts an array from the smallest to the biggest
numbers.sort((x, y) => x - y );
console.log(`Sorted: ${numbers}`)

// create a new array with each element doubled, sorted
let doubled = numbers.map(num => num*2)
doubled.sort((x, y) => x - y);
console.log(`Doubled: ${doubled}`)

// Use a for loop to get the same result
let output = [];
for (i of numbers){
	//.push will put each number into a new array and separate it with comma
	output.push(i*2);
}
console.log(`ForOf Doubled: ${output}`);


// Method to create a new array with the negative values removed
let filterNegative = numbers.filter(num => num > 0)
console.log(`Filtered for Negatives: ${filterNegative}`);

// For of method for above: 
let filterNeg = [];
for (i of numbers){
	if(i > 0){
		filterNeg.push(i);
	}
}
console.log(`ForOf Filtered for Neg: ${filterNeg}`)

// forEach methods to add all the values greater than 100
let sum = 0;
numbers.filter(num => num > 100).forEach(num => sum += num);
console.log(`Sum > 100 using filter and forEach: ${sum}`)

// Use filter and reduce to get above result
let filterRed = numbers.filter(num => num > 100).reduce((total, curr) => total + curr, 0);
console.log(`Sum > 100 using filter and reduced: ${filterRed}`);

// Use a for loop to get above result
let sum1 = 0;
for (i of numbers){
	if (i > 100){
		sum1 += i
	}
}
console.log(`Sum using ForOf loop: ${sum1}`)
