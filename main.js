// Clone ArrayOfCars Repo.
// Inside the file called main.js complete each of the following exercises.


// .length
// Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
// Console.log the length of the array.
// Use node main.js to run the program.

let cars = ['Ford', 'Audi', 'Honda', 'Jeep'];
console.log(cars.length);


// .concat()
// Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
// Run the program.

let moreCars = ['BMW', 'Mercedes', 'Dodge', 'Honda'];
let totalCars = cars.concat(moreCars);


// .indexOf() and .lastIndexOf()
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
// Run the program.

console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));


// .join()
// Use the join method to covert the array totalCars into a string called stringOfCars.
// Run the program.

let stringOfCars = totalCars.join();
console.log(stringOfCars);


// .split()
// Use the split method to convert stringOfCars back intro an array called totalCars.
// Run the program.

let totalCars2 = stringOfCars.split();
// ! totalCars is already declared above. Join does not alter the original array, therefore to go back we need a new array name that does not conflict


// .reverse()
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
// Run the program.

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);


// .sort()
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Run the program

console.log(carsInReverse.sort()); // Audi will appear first


// .slice()
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.

let removedCars = carsInReverse.slice(3,6);
console.log(removedCars);


// .splice()
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.

carsInReverse.splice(1, 2, 'Ford', 'Honda');
console.log(carsInReverse);
// ! splice changes the original array so you can console log directly

// .push()
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.

carsInReverse.push('BMW', 'Dodge');
console.log(carsInReverse);


// .pop()
// Use the pop method to remove and console.log the last item in the array carsInReverse.

let answer = carsInReverse.pop();
console.log(answer);


// .shift()
// Use the shift method to remove and console.log the first item in the array carsInReverse.

let answer2 = carsInReverse.shift();
console.log(answer2);


// .unshift()
// Use the unshift method to add a new type of car to the array carsInReverse.

carsInReverse.unshift('Porsche', 'Lamborghini');
console.log(carsInReverse);


// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

numbers2 = []

let adding2 = function(num){
  num += 2;
  numbers2.push(num);
}

numbers.forEach(adding2);

console.log(numbers2);