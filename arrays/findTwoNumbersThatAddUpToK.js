function findSum(nums, k) {

    let processed = [];
    for (let num of nums) {
          const diff = k - num;
     if (processed.includes(diff)) { 
            return [num, diff];
        } else {
            processed.push(num);
        }
    }

    return [];
}

export {
    findSum
};  
       