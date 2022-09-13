function valTimesIndex(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * i);
    }
    return newArray;
}

console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([5,10,15]));