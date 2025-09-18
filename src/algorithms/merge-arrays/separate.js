/**
 * Merge Two Sorted Arrays - Separate Result Array Approach
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 * 
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @returns {number[]} - New merged sorted array
 */
export function mergeTwoSortedArrays(nums1, nums2) {
    let p1 = 0, p2 = 0;
    const result = [];
    
    // Merge elements while both arrays have remaining elements
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] <= nums2[p2]) {
            result.push(nums1[p1++]);
        } else {
            result.push(nums2[p2++]);
        }
    }
    
    // Append remaining elements from nums1
    while (p1 < nums1.length) {
        result.push(nums1[p1++]);
    }
    
    // Append remaining elements from nums2
    while (p2 < nums2.length) {
        result.push(nums2[p2++]);
    }
    
    return result;
}