function rotateArrayLeft(arr, x) {
    // Calculate the actual number of rotations needed
    const rotations = x % arr.length;

    // Slice the array into two parts: from the start to the rotation point, and from the rotation point to the end
    const firstPart = arr.slice(rotations);
    const secondPart = arr.slice(0, rotations);

    // Concatenate the two parts to get the rotated array
    const rotatedArray = firstPart.concat(secondPart);

    return rotatedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5, 6, 7];
const x = 2;
const rotatedArray = rotateArrayLeft(originalArray, x);
console.log("Original Array:", originalArray);
console.log(`Array rotated left by ${x} positions:`, rotatedArray);
