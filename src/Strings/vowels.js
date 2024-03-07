function countVowels(str) {
    // Convert the string to lowercase to simplify the comparison
    str = str.toLowerCase();

    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize a variable to count the number of vowels
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // If the character is a vowel, increment the count
        if (vowels.includes(char)) {
            count++;
        }
    }

    // Return the total count of vowels
    return count;
}

// Test the function with a sample string
let inputString = "Hello World";
let numberOfVowels = countVowels(inputString);
console.log("Number of vowels:", numberOfVowels); // Output: 3
