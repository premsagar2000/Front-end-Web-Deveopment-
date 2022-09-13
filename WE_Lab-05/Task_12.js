function extractKey(arr, key) {
    let newArr = [];

    arr.forEach(obj => newArr.push(obj[key]));
    
    return newArr;
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));