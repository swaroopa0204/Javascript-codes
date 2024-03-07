function moveZeroesToEnd(numbers) {
    let nonZeroIndex = 0;

    // Iterate through the array and move non-zero elements to the front
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            numbers[nonZeroIndex] = numbers[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < numbers.length; i++) {
        numbers[i] = 0;
    }

    return numbers;
}

// Test the function
let numbers = [0, 1, 0, 3, 12];
console.log("Original Array:", numbers);
let result = moveZeroesToEnd(numbers);
console.log("After moving zeroes to the end:", result);
