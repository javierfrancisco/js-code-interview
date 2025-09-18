/**
 * Implement a function that rearranges elements in an array so that all
 *  negative elements appear to the left and all positive elements 
 * (including zero) appear to the right. It’s important to note tha
 *  maintaining the original sorted order of the input array is not required
 *  for this task.
 *  E.g. [1,6,-2,3,-4,5] > [-2,-4,5,1,3] 
 * [1,-2,3,-4,5] > [1,-2,3,-4,5,6]
 * @param {*} arr 
 * @returns 
 */
function rearrange(arr) {

    // Idea:
    // Use a pointer to say where is the last zero or negative value
    // Iterate from start to end, at each position compare if current item is zero or negative
    // If so, move iteam to location of negative pointer, 
    // move pointer and replace value there 
    // then reprocess the same location and finally continue
    const n = arr.length;
    let leftPointer = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            
            if (i != leftPointer) {
                [arr[i],arr[leftPointer]] = [arr[leftPointer],arr[i]];//modern swap
            }
            leftPointer += 1;
        }
    }
    return arr;
}

export {
    rearrange
};