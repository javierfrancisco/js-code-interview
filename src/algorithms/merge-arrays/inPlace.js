/**
 * Merge Two Sorted Arrays - In-Place Approach
 * Time Complexity: O(n * m) due to splice operations
 * Space Complexity: O(1) - modifies nums1 in place
 * 
 * @param {number[]} nums1 - First sorted array (will be modified)
 * @param {number[]} nums2 - Second sorted array
 * @returns {number[]} - Reference to modified nums1
 */
export function mergeTwoSortedArraysInPlace(nums1, nums2) {
    let p1 = 0, p2 = 0;
    
    while (p2 < nums2.length) {
        if (p1 < nums1.length && nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            nums1.splice(p1, 0, nums2[p2]);
            p1++; // Move past inserted element
            p2++; // Process next element in nums2
        }
    }
    
    return nums1;
}