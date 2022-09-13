function filterKey(arr, key) {
    const newArr = [];

    arr.filter(element => {
        if(element[key]) {
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious"));