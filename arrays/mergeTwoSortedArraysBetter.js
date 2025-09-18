function mergeArrays(nums1, nums2) {

    //initialize pointers p1 for nums1 and p2 for nums2 at index 0
    //Merge elements while either array has unprocessed elements
    // Take from nums 1 when:
    // - nums2 has been exhausted OR
    // - nums1 has a smaller or equal value at the current pointer
    // Otherwise take from nums2
    // Terminate when both arrays are fully processed
    
    if (nums2.length === 0) return nums1;

    let p1 = 0, p2 = 0;

    while (p1 < nums1.length || p2 < nums2.length) {

        
        //if no more elements in nums2 OR
        //if element in p1 is lower than p2, THEN keep p1
        if (p2 > nums2.length || (p1 < nums1.length && nums1[p1] < nums2[p2])) {
            p1++;
        } else if (p1 < nums1.length && p2 < nums2.length && nums2[p2] < nums1[p1]) {
            //if pointers are within boundaries, compare them, and if p2 is lower THEN add p2
            nums1.splice(p1, 0, nums2[p2]);
            p1++;
            p2++;
        } else {
            //there are still values in p2 and they are greater, so add to result
            nums1 = nums1.concat(nums2[p2]);
            p2++;
        }
        //if there are no more elements after p1, add the p2

        //else if element in p2 is lower than p1, then add p2 to the nums1



    }
    return nums1;
   
}

export {
    mergeArrays
};