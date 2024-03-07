function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Reverse each word and update the array
        words[i] = words[i].split('').reverse().join('');
    }

    // Join the reversed words into a single string
    return words.join(' ');
}

// Test the function with the input sentence
let input = "Java J2EE Reverse Me";
let output = reverseWords(input);
console.log(output); // Output: "avaJ EE2J esreveR eM"
