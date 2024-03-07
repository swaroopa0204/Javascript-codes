function fibonacciSeries(n) {
    let fibonacci = [];
    if (n >= 1) {
        fibonacci.push(0);
    }
    if (n >= 2) {
        fibonacci.push(1);
    }
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

// Test the function
let N = 10;
console.log("Input:", N);
console.log("Output:", fibonacciSeries(N).join(" "));
