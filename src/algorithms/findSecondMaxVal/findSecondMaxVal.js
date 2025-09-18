function findSecondMaximum(nums) {

    // Keep a priority queue of length 2 with always the max 2 nums
    let first = -Infinity;
    let second = -Infinity;

    for (const num of nums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return  second === -Infinity ? undefined : second;
}

export {
    findSecondMaximum
};