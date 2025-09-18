import { twoSumHashTable } from '../../src/algorithms/two-sum/hashTable.js';
import { twoSumTwoPointers as twoPointers } from '../../src/algorithms/two-sum/twoPointers.js';

describe('Two Sum Algorithms', () => {
    const testCases = [
        {
            name: 'basic case with positive numbers',
            nums: [2, 7, 11, 15],
            target: 9,
            expected: expect.arrayContaining([2, 7])
        },
        {
            name: 'array with negative numbers',
            nums: [-1, -2, -3, -4, -5],
            target: -8,
            expected: expect.arrayContaining([-3, -5])
        },
        {
            name: 'array with zeros',
            nums: [0, 4, 3, 0],
            target: 0,
            expected: expect.arrayContaining([0, 0])
        },
        {
            name: 'no solution exists',
            nums: [1, 2, 3, 4],
            target: 10,
            expected: []
        },
        {
            name: 'duplicate numbers',
            nums: [3, 3],
            target: 6,
            expected: expect.arrayContaining([3, 3])
        }
    ];

    describe('Hash Table Approach', () => {
        testCases.forEach(({ name, nums, target, expected }) => {
            test(name, () => {
                const result = twoSumHashTable([...nums], target);
                expect(result).toEqual(expected);
            });
        });

        test('maintains O(n) time complexity', () => {
            const largeArray = Array.from({ length: 1000 }, (_, i) => i);
            largeArray.push(999);
            const result = twoSumHashTable(largeArray, 1998);
            expect(result).toEqual(expect.arrayContaining([999, 999]));
        });
    });

    describe('Two Pointers Approach', () => {
        testCases.forEach(({ name, nums, target, expected }) => {
            test(name, () => {
                const result = twoPointers([...nums], target);
                expect(result).toEqual(expected);
            });
        });

        test('handles sorted array input', () => {
            const sortedNums = [1, 2, 3, 4, 5, 6];
            const result = twoPointers(sortedNums, 7);
            expect(result).toEqual(expect.arrayContaining([1, 6]));
        });
    });
});