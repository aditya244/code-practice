// 2. Triplet Sum to Zero (Three Sum)
// Problem: Given an array, find all unique triplets in the array that give the sum of zero.
// Example:
// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Hint: First sort the array, then for each element, use two pointers to find the other two elements.

// Algo hints
// the array should be sorted first
// since we need three pointers, 1st will be through loop pointer,
// second will be left point and third will be the right pointer.
// arr[i] + arr[left] + arr[right] -> if it is less than 0 then move the left pointer to right
// and if it is more than 0, then move the right pointer to left

const arr = [-1, 0, 1, 2, -1, -4];

function tripleSumZero(arr) {
    let sortedArr = arr.sort((a,b) => a - b);
    
    let elementArray = []

    for (let i = 0; i < sortedArr.length; i ++) {
        let leftPointer = i + 1;
        let rightPointer = sortedArr.length - 1;
        let sum = sortedArr[i] + sortedArr[leftPointer] + sortedArr[rightPointer];
        while ( leftPointer < rightPointer) {
            if (sum < 0) {
                leftPointer ++
            } else if (sum > 0) {
                rightPointer --;
            } else {
                elementArray.push([sortedArr[i], sortedArr[leftPointer], sortedArr[rightPointer]])
                leftPointer ++;
                rightPointer --;
            }
        }
    }
    return elementArray
}

console.log(tripleSumZero(arr))