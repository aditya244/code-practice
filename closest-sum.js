// Given a sorted array and a number x, find a pair in an array whose sum is closes to x

// Input arr[] = {10,22, 28, 29, 30, 40}, x = 54
// Output: 22 and 30

// Algo

// need to store the leftPointer
// need to store the rightPointer
// compare with target and accordingly move the pointer
// need to store diff 
// need to store pair for that partcilular diff
// compare the diff to the new one, if less flip and add the new pair and remove the old one
// if not keep the same pair and the diff


const arr = [10,22,28,29,30,40];
const target = 54

function findClosestSumPair(arr, target) {
  let closestPair = [];
  let startPointerIndex = 0;
  let endPointerIndex = arr.length - 1;
  let minDiff =  Number.MAX_SAFE_INTEGER;
  
  while (startPointerIndex !== endPointerIndex) {
  		let startPointer = arr[startPointerIndex];
      let endPointer = arr[endPointerIndex]
      let currDiff = Math.abs((startPointer + endPointer) - target)
      
      if (startPointer + endPointer === target) {
        closestPair = [startPointer, endPointer];
        return;
      }
      
    	if (currDiff < minDiff) {
      	minDiff = currDiff
        closestPair = [startPointer, endPointer]
      }
      
    	if (startPointer + endPointer < target) {
      	startPointerIndex ++ 
      } else if (startPointer + endPointer > target) {
      	endPointerIndex --;
      } 
    }
  
  return closestPair
}

console.log(findClosestSumPair(arr, target));