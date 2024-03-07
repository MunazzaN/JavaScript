function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let line = '';
        // Add '+' symbols
        for (let j = 0; j < rows - i; j++) {
            line += '+';
        }
        // Add '-' symbols
        for (let k = 0; k < i; k++) {
            line += '-';
        }
        console.log(line);
    }
}

// Call the function to print the pattern with 6 rows
printPattern(6);
