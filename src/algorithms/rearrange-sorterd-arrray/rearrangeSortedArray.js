function rearrangeArray(nums) {

    //Simple approach: create new array
    //Create two pointers, one at each end
    //left represent lowest numbers, and right are high numbers
    //while the pointers don't cross, pick element from 
    //right index and then left index

    const n = nums.length;

    if (n == 1) return nums;

    let leftPointer = 0;
    let rightPointer = n - 1;
    let result = [];

    while (leftPointer < rightPointer) {
        result.push(nums[rightPointer]);
        result.push(nums[leftPointer]);
        rightPointer -= 1;
        leftPointer += 1;
    }
    if (leftPointer == rightPointer) result.push(nums[leftPointer]);


    return result;

    ///nums: 2,4,6,8,10
    //cycle 1 ()
    // Original index [0,1,2,3,4] values [2,4,6,8,10]
    // Final indexes [4,0,3,1,2] values [10,2,8,4,6]

    //rearrangeArray: 10,2,8,4,6
}

export {
    rearrangeArray
};
