import { 
    mergeTwoSortedArrays,
    mergeTwoSortedArraysOptimized,
    mergeTwoSortedArraysInPlace
} from '../../src/index.js';

describe('Merge Two Sorted Arrays', () => {
    const testCases = [
        {
            name: 'basic merge case',
            nums1: [1, 2, 3],
            nums2: [2, 5, 6],
            expected: [1, 2, 2, 3, 5, 6]
        },
        {
            name: 'first array is empty',
            nums1: [],
            nums2: [1, 2, 3],
            expected: [1, 2, 3]
        },
        {
            name: 'second array is empty',
            nums1: [1, 2, 3],
            nums2: [],
            expected: [1, 2, 3]
        },
        {
            name: 'both arrays are empty',
            nums1: [],
            nums2: [],
            expected: []
        },
        {
            name: 'arrays with duplicate elements',
            nums1: [1, 1, 2],
            nums2: [1, 3, 3],
            expected: [1, 1, 1, 2, 3, 3]
        },
        {
            name: 'first array has larger elements',
            nums1: [4, 5, 6],
            nums2: [1, 2, 3],
            expected: [1, 2, 3, 4, 5, 6]
        },
        {
            name: 'single element arrays',
            nums1: [1],
            nums2: [2],
            expected: [1, 2]
        }
    ];

    describe('Separate Array Approach', () => {
        testCases.forEach(({ name, nums1, nums2, expected }) => {
            test(name, () => {
                const result = mergeTwoSortedArrays([...nums1], [...nums2]);
                expect(result).toEqual(expected);
            });
        });

        test('does not modify input arrays', () => {
            const nums1 = [1, 3, 5];
            const nums2 = [2, 4, 6];
            const nums1Copy = [...nums1];
            const nums2Copy = [...nums2];
            
            mergeTwoSortedArrays(nums1, nums2);
            
            expect(nums1).toEqual(nums1Copy);
            expect(nums2).toEqual(nums2Copy);
        });
    });

    describe('Optimized Approach', () => {
        testCases.forEach(({ name, nums1, nums2, expected }) => {
            test(name, () => {
                const result = mergeTwoSortedArraysOptimized([...nums1], [...nums2]);
                expect(result).toEqual(expected);
            });
        });
    });

    describe('In-Place Approach', () => {
        testCases.forEach(({ name, nums1, nums2, expected }) => {
            test(name, () => {
                const result = mergeTwoSortedArraysInPlace([...nums1], [...nums2]);
                expect(result).toEqual(expected);
            });
        });

        test('modifies the first array in place', () => {
            const nums1 = [1, 3, 5];
            const nums2 = [2, 4, 6];
            
            const result = mergeTwoSortedArraysInPlace(nums1, nums2);
            
            expect(result).toBe(nums1); // Same reference
            expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });
});