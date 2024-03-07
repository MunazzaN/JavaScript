function findMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Array is empty or invalid.";
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

// Example usage:
const numbers = [3, 1, 7, 9, 2, 5];
const result = findMinMax(numbers);
console.log("Smallest number:", result.min); // Output: 1
console.log("Largest number:", result.max); // Output: 9
