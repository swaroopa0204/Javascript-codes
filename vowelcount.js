function countVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert the input string to lowercase to handle uppercase vowels
    str = str.toLowerCase();

    let count = 0;
    for (let char of str) {
        // Check if the current character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Test the function
let inputString = "Hello World";
console.log("Input String:", inputString);
console.log("Number of vowels:", countVowels(inputString));
