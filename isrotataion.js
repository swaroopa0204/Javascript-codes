function isRotation(str1, str2) {
    // Check if the lengths of the two strings are equal and non-zero
    if (str1.length !== str2.length || str1.length === 0) {
        return false;
    }

    // Concatenate str1 with itself, if str2 is a rotation of str1, then str2 must be a substring of this concatenated string
    let concatenatedStr = str1 + str1;

    // Check if str2 is a substring of concatenatedStr
    if (concatenatedStr.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

// Test the function
let str1 = "JavaJ2eeStrutsHibernate";
let str2 = "StrutsHibernateJavaJ2ee";
console.log("Is str2 a rotation of str1?", isRotation(str1, str2));
