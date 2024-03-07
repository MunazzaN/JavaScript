function isRotation(str1, str2) {
    // Check if both strings have the same length and are not empty
    if (str1.length !== str2.length || str1.length === 0) {
        return false;
    }

    // Concatenate str1 with itself to create a long string
    let concatenated = str1 + str1;

    // Check if str2 is a substring of the concatenated string
    return concatenated.includes(str2);
}

// Test the function with the input strings
let input1 = "JavaJ2eeStrutsHibernate";
let input2 = "StrutsHibernateJavaJ2ee";
console.log(isRotation(input1, input2)); // Output: true
