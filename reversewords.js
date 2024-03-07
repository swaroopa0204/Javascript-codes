function reverseWords(sentence) {
    
    // Split the sentence into an array of words
    let words = sentence.split(" ");

    // Iterate through each word and reverse it
    for (let i = 0; i < words.length; i++) {
        // Split each word into an array of characters, reverse it, and join it back into a string
        words[i] = words[i].split("").reverse().join("");
    }

    // Join the reversed words back into a sentence
    let reversedSentence = words.join(" ");

    return reversedSentence;
}

// Test the function
let inputSentence = "Java J2EE Reverse Me";
console.log("Input Sentence:", inputSentence);
console.log("Reversed Words:", reverseWords(inputSentence));
