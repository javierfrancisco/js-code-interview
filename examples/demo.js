import {
    twoSumHashTable,
    twoSumTwoPointers,
    mergeTwoSortedArrays,
    mergeTwoSortedArraysOptimized,
    mergeTwoSortedArraysInPlace,
    productExceptSelf,
    removeEven,
} from '../src/index.js';

import { rightRotate } from '../src/algorithms/rotateArray/rotateArray.js';
import { rearrange } from '../src/algorithms/rearrange-positive-negative/rearrangePositiveNegative.js'
import { rearrangeArray } from '../src/algorithms/rearrange-sorterd-arrray/rearrangeSortedArray.js'

console.log('=== JavaScript Algorithm Demonstrations ===\n');

console.log('1. Rearrage sorted array');
let nums2 = [2,4,6,8,10]; 
console.log(`nums: ${nums2}`);
console.log(`rearrangeArray: ${rearrangeArray(nums2)}`);

console.log('1. Rearrage');
let nums1 = [1,-2,3,-4,5]; 
console.log(`nums: ${nums1}`);
console.log(`Rearrage: ${rearrange(nums1)}`);

//
console.log('1. Rotate Right:');
//const numsArr = [1, 2, 3, 4, 5, 6];
let numsArr = [1,2,3,4,5,6,7];
console.log(`nums: ${numsArr}`);
//console.log(`rotated by 2 positions : ${rightRotate(numsArr, 3)}`);//expected: [5,6,7,1,2,3,4]

numsArr = [784,-2888,2898,829];
console.log(`nums: ${numsArr}`);
//console.log(`rotated by 2 positions : ${rightRotate(numsArr, 2)}`);//expected: [2898,829,784,-2888]

numsArr = [1, 2, 3];
console.log(`nums: ${numsArr}`);
console.log(`rotated by 1 positions : ${rightRotate(numsArr, 1)}`);//expected: [2898,829,784,-2888]


// Two Sum Examples
console.log('1. Two Sum Algorithms:');
const nums = [2, 4, 6, 8, 10, 19];
const target = 21;

console.log(`Input: [${nums.join(', ')}], Target: ${target}`);
console.log(`Hash Table Approach: [${twoSumHashTable([...nums], target).join(', ')}]`);
console.log(`Two Pointers Approach: [${twoSumTwoPointers([...nums], target).join(', ')}]`);
console.log();

// Merge Arrays Examples
console.log('2. Merge Two Sorted Arrays:');
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(`Input: [${arr1.join(', ')}] and [${arr2.join(', ')}]`);
console.log(`Separate Array: [${mergeTwoSortedArrays([...arr1], [...arr2]).join(', ')}]`);
console.log(`Optimized: [${mergeTwoSortedArraysOptimized([...arr1], [...arr2]).join(', ')}]`);
console.log(`In-Place: [${mergeTwoSortedArraysInPlace([...arr1], [...arr2]).join(', ')}]`);
console.log();

// Product Except Self Example
console.log('3. Product of Array Except Self:');
const productInput = [1, 2, 3, 4];
console.log(`Input: [${productInput.join(', ')}]`);
console.log(`Output: [${productExceptSelf(productInput).join(', ')}]`);
console.log();

// Remove Even Numbers Example
console.log('4. Remove Even Numbers:');
const evenOddArray = [1, 22, 45, 33, 19, 32];
console.log(`Input: [${evenOddArray.join(', ')}]`);
console.log(`Output: [${removeEven(evenOddArray).join(', ')}]`);
console.log();

console.log('=== Performance Comparison Example ===');
const largeArray1 = Array.from({ length: 1000 }, (_, i) => i * 2);
const largeArray2 = Array.from({ length: 1000 }, (_, i) => i * 2 + 1);

console.time('Separate Array Merge (1000 + 1000 elements)');
mergeTwoSortedArrays(largeArray1, largeArray2);
console.timeEnd('Separate Array Merge (1000 + 1000 elements)');

console.time('In-Place Merge (1000 + 1000 elements)');
mergeTwoSortedArraysInPlace([...largeArray1], [...largeArray2]);
console.timeEnd('In-Place Merge (1000 + 1000 elements)');