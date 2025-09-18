/**
 * Two Sum - Hash Table Approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} - Array containing two numbers that sum to target, or empty array if not found
 */
export function twoSumHashTable(nums, target) {
    const processed = [];
    
    for (const num of nums) {
        const complement = target - num;
        if (processed.includes(complement)) { 
            return [num, complement];
        }
        processed.push(num);
    }
    
    return [];
}