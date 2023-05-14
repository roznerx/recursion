/*
    Using iteration, write a function fibs which takes a number and returns an array containing 
    that many numbers from the fibonacci sequence. Using an example input of 8, this method should
    return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

// Initial answer:

function fibs(n) {
    let arr = [0, 1];

    if (n <= 0) {
        console.log("The sequence is empty!");
        return;
    } else if (n == 1) {
        return [0];
    } else {
        for (let i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        };
        return arr; 
    };
};

console.log(fibs(8));

/*
    Now write another method fibsRec which solves the same problem recursively. This can be done 
    in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a
    requirement… just get it done).
*/

function shortFibsRec(n) {
    return n <= 0 ? console.log("The sequence is empty!") :
    n == 1 ? [0] :
    n == 2 ? [0, 1] :
    [...shortFibsRec(n-1), shortFibsRec(n-1)[n-2] + shortFibsRec(n-1)[n-3]];
};

console.log(shortFibsRec(8));

// Refactoring the function so is as absurdly short as possible:

let f = (n) => n <= 0 ? console.log("Empty sequence") : n == 1 ? [0] : n == 2 ? [0, 1] : [...f(n-1), f(n-1)[n-2] + f(n-1)[n-3]];

console.log(f(8));

// Now that looks horrible!