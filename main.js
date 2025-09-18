function removeEven(arr) {
    
    return arr.filter(( v => (v % 2) !== 0));
}

console.log(removeEven([1,22,45,33,19,32]));


//export {
//    removeEven
//};