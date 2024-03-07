function areAnagrams(str1, str2) {
    
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and compare them
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
let string1 = "listen";
let string2 = "silents";
console.log(`Are "${string1}" and "${string2}" anagrams?`, areAnagrams(string1, string2));
