// Remove Duplicates from Sorted Array
// Problem: Given a sorted array, remove duplicates in place such that each element appears only once and return the new length of the array.
// Example:
// Input: arr = [0, 0, 1, 1, 2, 2, 3, 3, 4]
// Output: Length = 5, Array = [0, 1, 2, 3, 4]
// Hint: Use one pointer to traverse the array and another to update the array in place.

// one pointer to traverse till arr.length - 1
// one pointer to track the index where current value is updated
// one var to track the value currently updated
// another variable to store the final array

const arr = [0, 0, 1, 1, 2, 2, 3, 3, 4];

function RemoveDuplicates(arr) {
    let iteratorPointer = 1;
    let currentPointer = 0;

    while (iteratorPointer < arr.length) {
        if (arr[currentPointer] !== arr[iteratorPointer] ) {
            currentPointer ++;
            arr[currentPointer] = arr[iteratorPointer]
        }
        iteratorPointer ++
    }

    return currentPointer + 1 // + 1 because length will be greater than the last index
}

const length = RemoveDuplicates(arr)
console.log(length)
console.log(arr.slice(0, length))