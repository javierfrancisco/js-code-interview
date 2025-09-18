# 🚀 JavaScript Code Interview Practice

> A comprehensive collection of JavaScript algorithmic problems and their implementations, featuring multiple solution approaches for comparison and learning.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)
[![Jest](https://img.shields.io/badge/Tests-Jest-red.svg)](https://jestjs.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 Project Overview

This repository contains common algorithmic problems frequently asked in JavaScript coding interviews. Each problem includes multiple implementation approaches to showcase different time/space trade-offs and coding patterns.

## 🏗️ Code Architecture

### Directory Structure

```
.
├── main.js                    # Entry point with simple array filtering
├── arrays/                    # Legacy array algorithm demonstrations
│   └── index.js              # Demo runner for array algorithms
├── src/                      
│   ├── index.js              # Main export hub for all algorithms
│   └── algorithms/           # Algorithm implementations
│       ├── two-sum/          # Two Sum problem variants
│       ├── merge-arrays/     # Array merging approaches
│       └── ...               # Other algorithms
└── tests/                    # Jest test suites
    └── algorithms/           # Algorithm-specific tests
```

### 🎯 Algorithm Categories

#### **Two Sum Problem**
Finding pairs of numbers that sum to a target value

| Implementation | Time Complexity | Space Complexity | File |
|---------------|-----------------|------------------|------|
| Hash Table | O(n) | O(n) | `src/algorithms/two-sum/hashTable.js` |
| Two Pointers | O(n log n) | O(1) | `src/algorithms/two-sum/twoPointers.js` |

#### **Array Merging**
Combining two sorted arrays while maintaining order

| Implementation | Approach | File |
|---------------|----------|------|
| Separate Array | Two-pointer merge with new array | `src/algorithms/merge-arrays/separate.js` |
| Optimized | Enhanced edge case handling | `src/algorithms/merge-arrays/optimized.js` |
| In-Place | Splice operations for memory efficiency | `src/algorithms/merge-arrays/inPlace.js` |

#### **Additional Algorithms**

- **Product Except Self** - Calculate product array excluding current element
- **Remove Even Numbers** - Filter arrays for odd values only
- **Rearrange Positive/Negative** - Partition arrays by sign
- **Find Minimum Value** - Locate smallest element
- **Rotate Array** - Circular array rotation

## 🚦 Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/javierfrancisco/js-code-interview.git

# Navigate to project directory
cd js-code-interview

# Install dependencies
npm install
```

## 💻 Development Workflow

### Running Code

```bash
# Run main entry point
node main.js

# Run array algorithm demonstrations
node arrays/index.js

# Run specific algorithm file
node -e "import('./src/algorithms/two-sum/hashTable.js')"

# Run all tests
npm test

# Run specific test suite
npm test -- tests/algorithms/two-sum.test.js
```

### Module System

- ✅ ES6 modules with `import`/`export` syntax
- ✅ Each algorithm exports its main function
- ✅ Centralized exports via `src/index.js`
- ✅ Test demonstrations in `arrays/index.js`

## 📝 Code Patterns

### Naming Conventions

- **Functions**: Descriptive camelCase matching the problem domain
- **Files**: kebab-case for directories, camelCase for files
- **Imports**: Aliased imports for multiple implementations

### Implementation Style

```javascript
/**
 * Problem description and constraints
 * @param {type} param - Parameter description
 * @returns {type} Return value description
 */
function algorithmName(param) {
    // Time: O(n), Space: O(1)
    
    // Implementation with inline comments
    // explaining the approach
    
    return result;
}
```

## 🧪 Testing

All algorithms include comprehensive Jest test suites:

```bash
# Run all tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch

# Run specific test pattern
npm test -- --testNamePattern="Two Sum"
```

## 📚 Algorithm List

| Algorithm | Category | Complexity | Status |
|-----------|----------|------------|--------|
| Two Sum (Hash) | Arrays | O(n) | ✅ Tested |
| Two Sum (Pointers) | Arrays | O(n log n) | ✅ Tested |
| Merge Sorted Arrays | Arrays | O(n+m) | ✅ Tested |
| Product Except Self | Arrays | O(n) | ✅ Tested |
| Remove Even Numbers | Arrays | O(n) | ✅ Tested |
| Rearrange by Sign | Arrays | O(n) | ✅ Tested |
| Find Minimum | Search | O(n) | 🚧 Pending |
| Find Second Max | Search | O(n) | 🚧 Pending |
| First Non-Repeating | Hash | O(n) | 🚧 Pending |
| Rotate Array | Arrays | O(n) | 🚧 Pending |

## 🎯 Usage Examples

### Two Sum Problem

```javascript
import { twoSumHashTable, twoSumTwoPointers } from './src/index.js';

// Hash table approach - best for unsorted arrays
const result1 = twoSumHashTable([2, 7, 11, 15], 9);
console.log(result1); // [2, 7]

// Two pointers - best for sorted arrays
const result2 = twoSumTwoPointers([2, 7, 11, 15], 9);
console.log(result2); // [2, 7]
```

### Array Merging

```javascript
import { mergeTwoSortedArrays } from './src/index.js';

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const merged = mergeTwoSortedArrays(arr1, arr2);
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-algorithm`)
3. Implement algorithm with tests
4. Ensure all tests pass (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing algorithm'`)
6. Push to the branch (`git push origin feature/amazing-algorithm`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Algorithm concepts from common interview preparation resources
- Test patterns inspired by Jest best practices
- ES6 module structure for modern JavaScript development

## 📞 Contact

**GitHub**: [@javierfrancisco](https://github.com/javierfrancisco)

---

<div align="center">
  <sub>Built with ❤️ for JavaScript interview preparation</sub>
</div>