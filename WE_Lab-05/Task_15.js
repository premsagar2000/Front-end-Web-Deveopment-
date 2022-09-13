function addKeyAndValue(arr, key, value) {
    arr.forEach(item => item[key] = value);
    return arr;
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));