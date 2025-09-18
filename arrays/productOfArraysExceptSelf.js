function findProduct(arr) {

    // Use accumulative products
    // Compute cumulative products from left to right
    // First pass: fill result[i] with the product of all elements before i
    // Second pass: multiply result[i] by cumulative product of elements after i (traverse from end to start)

    const n = arr.length;
    if (n == 0) return [];

    let product = 1;
    let productArr = new Array(n);
    productArr[0] = 1;
    for (let i = 1; i < n; i++) {
        product *= arr[i - 1];
        productArr[i] = product;
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        productArr[i] *= rightProduct;
        rightProduct *= arr[i];
    }
    return productArr;
}

export {
    findProduct
};