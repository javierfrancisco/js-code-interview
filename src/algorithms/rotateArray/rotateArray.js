function rightRotate(nums, k) {

    // Juggling algo: the idea is that instead of rotating an element at a time
    // you rotate using cycles, the number of cycles is given by n / d where d
    // is the rotaing positions.
    const n = nums.length;
    
    //each cycle iterates n/k times
    const effectiveK = k % n; //normalizes the length, in case k is greater than n, or k == n, which means no rotations
    const numOfCycles = GCD(n, effectiveK);
    
    console.log(`n: ${n}, k: ${k}, numOfCycles: ${numOfCycles}, cycleLength: ${effectiveK}`);
    for (let cycle = 0; cycle < numOfCycles; cycle++) {
        
        let currIndx = cycle;
        let nextIndx = undefined;
        let currElement = nums[currIndx];
        
        while (true) {
            
            //nextIndx = (currIndx + cycleLength) % n;//rotate left
            nextIndx = (currIndx - effectiveK + n) % n;//rotate right
            console.log(`${nums} currIndx: ${currIndx}, nextIndx: ${nextIndx}, val at currInd ${nums[currIndx]} , val at nextInd ${nums[nextIndx]}`);
            if (nextIndx == cycle) {
                break;
            }
            nums[currIndx] = nums[nextIndx];
            currIndx = nextIndx;
        }
        nums[currIndx] = currElement;

    }
    return nums;
}

/**
 * Grates common denominator
 */
function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export {
    rightRotate
};