function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert strings to lowercase
    str1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // If the lengths of the strings are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters in both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function with sample strings
let str1 = "listen";
let str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true

str1 = "hello";
str2 = "world";
console.log(areAnagrams(str1, str2)); // Output: false
