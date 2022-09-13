function filterLetters(arr, letter) {
    let count = 0
    arr.filter(x => {
        if(x.toLowerCase() == letter.toLowerCase()) {
        count++
        }
    })
    return count;
}


console.log(filterLetters(["a","a","b","b","A"], "a"));