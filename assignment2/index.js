/*
    Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
*/

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    };

    let leftSide = arr.slice(0, arr.length / 2);
    let rightSide = arr.slice(arr.length / 2);

    function merge(leftArr, rightArr) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            leftArr[leftIndex] < rightArr[rightIndex] ? 
            result.push(leftArr[leftIndex++]) : 
            result.push(rightArr[rightIndex++]);
        };

        return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
    };

    return merge(mergeSort(leftSide), mergeSort(rightSide));
};

console.log(mergeSort([5, 3, 8, 1, 6, 9, 2, 7, 4]));
console.log(mergeSort([5, 3, 8, 1, 6, 2, 7, 4]));
console.log(mergeSort([5, 3, 8, 1]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([660, 452, 832, 573, 450, 759, 147, 862]));