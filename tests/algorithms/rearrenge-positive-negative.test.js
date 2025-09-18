import { 
    rearrange
} from '../../src/index.js';

describe('Rearrenge Positive and Negatives numbers in array', () => {
    const testCases = [
        {
            name: 'basic case',
            arr: [1,-2,3,-4,5],
            expected: [-2,-4,1,3,5],
        }
    ];

    describe('Single pointer Approach', () => {
        testCases.forEach(({ name, arr }) => {
            test(name, () => {
                const result = rearrange([...arr]);
                
                // Find the index where positives start
                let firstPositiveIndex = result.findIndex(x => x >= 0);
                if (firstPositiveIndex === -1) firstPositiveIndex = result.length;
                
                // Check all negatives are before all positives
                const negatives = result.slice(0, firstPositiveIndex);
                const positives = result.slice(firstPositiveIndex);
                
                expect(negatives.every(x => x < 0)).toBe(true);
                expect(positives.every(x => x >= 0)).toBe(true);
                
                // Check we have the same elements (just rearranged)
                expect(result.sort((a,b) => a-b)).toEqual(arr.sort((a,b) => a-b));
            });
        });
    });
});