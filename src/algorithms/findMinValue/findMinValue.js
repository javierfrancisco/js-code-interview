/**
 * Challenge: Find Minimum Value in Array
    Try to solve the Find Minimum Value in Array problem.

    Statement
    Given an array of integers, arr, find the minimum value from the array.
 * @param {*} arr 
 * @returns 
 */
function findMinimum(arr) {

    let minValue = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) minValue = arr[i];
    }
    return minValue;
}

export {
    findMinimum
};