function addKeyAndValue(arr,key,val){
    arr.forEach(obj => obj[key] = val)
    console.log(arr)
}
    
addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true)