function findSum(nums, k) {

    //sort nums array to allow two pointers technique
    //create two pointers, left and right, one at each end of the nums array
    //do a loop while left and right don't cross
    //sum the values at left and right and adjust pointers
    // if sum == to k found solution
    // if diff > 0 , sum went too far, decrease right
    // id diff < 0, sum was not enough, increase left

    let left = 0, right = nums.length - 1;
    nums.sort((a,b) => {return a - b});

    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum == k) {
            return [nums[left], nums[right]];
        } else if (sum > k) {
            right--;
        } else {
            left++;
        }
    }
    return [];
}

export {
    findSum
};
       