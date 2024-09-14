// Find if Array has Two Elements with Difference k
// Problem: Given a sorted array of integers, find two elements in the array such that their difference is equal to k.
// Example:
// Input: arr = [1, 5, 9, 12, 15], k = 4
// Output: [1, 5]
// Hint: Use two pointers to check pairs where the difference between them is equal to k.

// array is already sorted
// assign two pointers, left and right
// loop throught the pointers till they meet
// on every iteration check the difference, if it is satisfies, 
// if it does, store in an array and return

const arr = [1, 5, 9, 12, 15];
const k = 4;

function twoElementsDifferenceK(arr, k) {
    let leftPointer = 0;
    let rightPointer =  1;
    let kDiffPair = [];
    while (leftPointer < arr.length) {
        let diff = arr[rightPointer] - arr[leftPointer]
        if(diff === k) {
            kDiffPair = [arr[leftPointer], arr[rightPointer]]
            return kDiffPair
        } else if ( diff > k) {
            leftPointer ++
        } else {
            rightPointer ++
        }
    }
}

console.log(twoElementsDifferenceK(arr, k))