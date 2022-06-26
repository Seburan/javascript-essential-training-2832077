/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const myArray = [1, "deux", 3, true, "cinq", 6, 7, 8];
console.log(myArray);

let lastItem = myArray.pop();
console.log("Remote the last item : ", lastItem);
console.log(myArray);

console.log("Add the last item as first item: ", myArray.unshift(lastItem));
console.log(myArray);

console.log("Sort array : ", myArray.sort());
console.log(myArray);

let elementToRemove = myArray.find((element) => element === "cinq");
console.log("Find in array : ", elementToRemove);
console.log(myArray);

console.log(
  "Remove this element : ",
  myArray.splice(myArray.indexOf(elementToRemove), 1)
);
console.log(myArray);
