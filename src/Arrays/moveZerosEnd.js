function moveZerosToEnd(numbers) {
    // Initialize an index to track the position where non-zero elements will be placed
    let nonZeroIndex = 0;

    // Loop through the array
    for (let i = 0; i < numbers.length; i++) {
        // If the current element is not zero, move it to the nonZeroIndex position and increment nonZeroIndex
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

// Example usage:
const numbers = [0, 1, 0, 3, 12];
console.log("Original Array:", numbers);
const modifiedArray = moveZerosToEnd(numbers);
console.log("Array after moving zeros to end:", modifiedArray);
