function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
const array = [1, 3, 5, 7, 9];
const targetElement = 5;
console.log("Array:", array);
console.log("Index of", targetElement, ":", linearSearch(array, targetElement));
