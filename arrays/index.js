import { mergeArrays } from './mergeTwoSortedArrays.js'
import { mergeArrays as  mergeTwoSortedArraysBetter} from './mergeTwoSortedArraysBetter.js'
import { mergeArrays as mergeTwoSortedArraysInPlace } from './mergeTwoSortedArraysInPlace.js'
import { findSum } from './findTwoNumbersThatAddUpToK.js'
import { findSum as findTwoNumbersThatAddUpToKTwoPointers} from './findTwoNumbersThatAddUpToKTwoPointers.js'

const result = mergeArrays([1, 2], [3, 4]);
console.log(result);


const result2 = mergeTwoSortedArraysBetter([1, 2], [3, 4]);
console.log(result2);

const result3 = mergeTwoSortedArraysInPlace([1, 2], [3, 4]);
console.log(result3);

const findSumResult = findSum([2,4,6,8,10,19] , 21);
console.log(findSumResult);

const resultFind = findTwoNumbersThatAddUpToKTwoPointers([2,4,6,8,10,19] , 21);
console.log(`resultFind: ${resultFind}`);