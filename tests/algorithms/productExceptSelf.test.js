import { productExceptSelf } from '../../src/algorithms/productExceptSelf.js';

describe('Product of Array Except Self', () => {
    const testCases = [
        {
            name: 'basic case with positive numbers',
            input: [1, 2, 3, 4],
            expected: [24, 12, 8, 6]
        },
        {
            name: 'array with negative numbers',
            input: [-1, 1, 0, -3, 3],
            expected: [0, 0, 9, 0, 0]
        },
        {
            name: 'array with zeros',
            input: [0, 1, 2, 3],
            expected: [6, 0, 0, 0]
        },
        {
            name: 'single element array',
            input: [5],
            expected: [1]
        },
        {
            name: 'two element array',
            input: [2, 3],
            expected: [3, 2]
        },
        {
            name: 'array with multiple zeros',
            input: [0, 0, 2, 3],
            expected: [0, 0, 0, 0]
        },
        {
            name: 'empty array',
            input: [],
            expected: []
        }
    ];

    testCases.forEach(({ name, input, expected }) => {
        test(name, () => {
            const result = productExceptSelf([...input]);
            // Normalize -0 to 0 for comparison
            const normalizedResult = result.map(x => x === 0 ? 0 : x);
            expect(normalizedResult).toEqual(expected);
        });
    });

    test('does not modify input array', () => {
        const input = [1, 2, 3, 4];
        const inputCopy = [...input];
        
        productExceptSelf(input);
        
        expect(input).toEqual(inputCopy);
    });

    test('handles large numbers', () => {
        const input = [100, 200, 300];
        const result = productExceptSelf(input);
        expect(result).toEqual([60000, 30000, 20000]);
    });
});