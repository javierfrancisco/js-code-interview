/**
 * Product of Array Except Self
 * Time Complexity: O(n)
 * Space Complexity: O(1) excluding output array
 * 
 * @param {number[]} nums - Array of integers
 * @returns {number[]} - Array where each element is the product of all elements except itself
 */
export function productExceptSelf(nums) {
    const n = nums.length;
    if (n === 0) return [];
    
    const result = new Array(n);
    
    // First pass: fill result[i] with the product of all elements before i
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Second pass: multiply result[i] by cumulative product of elements after i
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}