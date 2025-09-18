/**
 * Remove Even Numbers
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is the number of odd elements
 * 
 * @param {number[]} arr - Array of integers
 * @returns {number[]} - New array containing only odd numbers
 */
export function removeEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}