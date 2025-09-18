function mergeArrays(nums1, nums2) {

    //initialize pointers p1 for nums1 and p2 for nums2 at index 0
    let p1 = 0, p2 = 0;

    while (p2 < nums2.length) {

        if (p1 < nums1.length && nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            nums1.splice(p1, 0 , nums2[p2]);
            p1++; //move past interted element
            p2++; // process next element in nums2
        }
    }

    return nums1;
}

export {
    mergeArrays
};