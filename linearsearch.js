function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found in the array
}

// Test the function
let numbers = [4, 7, 2, 9, 1, 5];
let target = 9;
let index = linearSearch(numbers, target);
if (index !== -1) {
    console.log(`${target} found at index ${index}.`);
} else {
    console.log(`${target} not found in the array.`);
}