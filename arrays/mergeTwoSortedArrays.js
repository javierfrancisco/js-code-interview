function mergeArrays(nums1, nums2) {

    //initialize pointers
    //merge elements
    //append remaining elements
    let p1 = 0, p2 = 0;
    let res = [];
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] <= nums2[p2]) {
            res.push(nums1[p1++]);
        } else {
            res.push(nums2[p2++]);
        }
    }
    while (p1 < nums1.length ) res.push(nums1[p1++]);

    while (p2 < nums2.length ) res.push(nums2[p2++]);    


    return res;
}

export {
    mergeArrays
};