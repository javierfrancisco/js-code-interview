# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript code interview practice repository containing common algorithmic problems and their implementations. The codebase focuses on array manipulation algorithms with multiple solution approaches for comparison.

## Code Architecture

### Structure
- `main.js`: Entry point with a simple array filtering function (removeEven)
- `arrays/`: Contains algorithmic implementations organized by problem type
- `arrays/index.js`: Demonstrates usage of all array algorithms with test cases

### Algorithm Categories

**Two Sum Problem**: Finding two numbers that add up to a target
- `findTwoNumbersThatAddUpToK.js`: Hash table approach (O(n) time, O(n) space)  
- `findTwoNumbersThatAddUpToKTwoPointers.js`: Two pointers approach (O(n log n) time, O(1) space)

**Array Merging**: Merging two sorted arrays
- `mergeTwoSortedArrays.js`: Two-pointer merge with separate result array
- `mergeTwoSortedArraysBetter.js`: Optimized two-pointer approach handling edge cases
- `mergeTwoSortedArraysInPlace.js`: In-place merge using splice operations

## Development Workflow

### Running Code
```bash
node main.js                    # Run main entry point
node arrays/index.js           # Run array algorithm demonstrations
node -e "import('./path/file.js')"  # Run specific algorithm file
```

### Module System
- Uses ES6 modules with `import`/`export` syntax
- Each algorithm file exports its main function
- Test usage is demonstrated in `arrays/index.js`

## Code Patterns

### Function Naming
- Algorithm implementations use descriptive function names that match the problem
- Multiple implementations of the same problem use aliased imports for differentiation

### Implementation Style
- Functions include inline comments explaining algorithmic approach
- Multiple solution approaches for the same problem showcase different time/space trade-offs
- Each algorithm includes complexity analysis in comments