/**
 * Challenge: First Non-Repeating Integer in an Array
Try to solve the First NonRepeating Integer in an Array problem.

Statement
Given an array nums, find the first nonrepeating integer in it.

 * @param {*} nums 
 * @returns 
 */
function findFirstUnique(nums) {

    // First Non repeating = all elements have to be visited at least one
    // keep track of number of times a value has been seen
    // iterate over the array and get where number of visited is 1
    const visited = [];
    for (let i = 0; i < nums.length; i++) {
        visited[nums[i]] =  visited[nums[i]] ? visited[nums[i]] + 1 : 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (visited[nums[i]] == 1) return nums[i];
    }

    return -1;
}

export {
    findFirstUnique
};