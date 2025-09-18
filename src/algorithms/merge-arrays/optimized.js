/**
 * Merge Two Sorted Arrays - Optimized Single Loop Approach
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 * 
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @returns {number[]} - New merged sorted array
 */
export function mergeTwoSortedArraysOptimized(nums1, nums2) {
    let p1 = 0, p2 = 0;
    const result = [];
    
    // Single loop that handles both merging and remaining elements
    while (p1 < nums1.length || p2 < nums2.length) {
        if (p2 >= nums2.length || 
            (p1 < nums1.length && nums1[p1] <= nums2[p2])) {
            result.push(nums1[p1++]);
        } else {
            result.push(nums2[p2++]);
        }
    }
    
    return result;
}