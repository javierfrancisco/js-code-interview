/**
 * Two Sum - Two Pointers Approach
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(1) excluding input array modification
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} - Array containing two numbers that sum to target, or empty array if not found
 */
export function twoSumTwoPointers(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    // Sort the array to enable two pointers technique
    nums.sort((a, b) => a - b);
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === target) {
            return [nums[left], nums[right]];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    
    return [];
}