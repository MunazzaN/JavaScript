function printAge(age) {
    if (age < 13) {
        console.log("Kid");
    } else if (age >= 13 && age <= 19) {
        console.log("Teen");
    } else {
        console.log("Adult");
    }
}

// Test cases
printAge(4);  // Output: Kid
printAge(15); // Output: Teen
printAge(25); // Output: Adult