function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Test the function
let originalArray = [1, 2, 3, 4, 5];
let reversed = reverseArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversed);
