var myArray = ['one', 'two', 'three'];
myArray.reverse();

console.log(myArray) // ['three', 'two', 'one']

const numbersList = [1, 2, 3];
const total = numbersList.reduce((total, currentElement) => total + currentElement);
console.log(total)