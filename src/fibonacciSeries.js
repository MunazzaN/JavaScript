function fibonacciSeries(N) {
    let fibonacci = [0, 1];

    for (let i = 2; i < N; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci.slice(0, N).join(' ');
}

// Test case
let N = 10;
console.log("Fibonacci Series up to", N, "terms:");
console.log(fibonacciSeries(N));
