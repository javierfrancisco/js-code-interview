import { removeEven } from '../../src/algorithms/removeEven.js';

describe('Remove Even Numbers', () => {
    const testCases = [
        {
            name: 'mixed even and odd numbers',
            input: [1, 2, 3, 4, 5, 6],
            expected: [1, 3, 5]
        },
        {
            name: 'all even numbers',
            input: [2, 4, 6, 8],
            expected: []
        },
        {
            name: 'all odd numbers',
            input: [1, 3, 5, 7],
            expected: [1, 3, 5, 7]
        },
        {
            name: 'empty array',
            input: [],
            expected: []
        },
        {
            name: 'single even number',
            input: [2],
            expected: []
        },
        {
            name: 'single odd number',
            input: [3],
            expected: [3]
        },
        {
            name: 'negative numbers',
            input: [-3, -2, -1, 0, 1, 2, 3],
            expected: [-3, -1, 1, 3]
        },
        {
            name: 'zero is even',
            input: [0, 1, 2, 3],
            expected: [1, 3]
        }
    ];

    testCases.forEach(({ name, input, expected }) => {
        test(name, () => {
            const result = removeEven([...input]);
            expect(result).toEqual(expected);
        });
    });

    test('does not modify input array', () => {
        const input = [1, 2, 3, 4, 5];
        const inputCopy = [...input];
        
        removeEven(input);
        
        expect(input).toEqual(inputCopy);
    });

    test('preserves order of odd numbers', () => {
        const input = [9, 2, 7, 4, 3, 6, 1];
        const result = removeEven(input);
        expect(result).toEqual([9, 7, 3, 1]);
    });
});