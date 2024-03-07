function findMinMax(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min: min, max: max };
}

// Test the function
let numbers = [4, 2, 7, 1, 9, 5];
let result = findMinMax(numbers);
console.log("Array:", numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
