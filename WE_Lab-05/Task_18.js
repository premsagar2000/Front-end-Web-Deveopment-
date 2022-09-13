function removeVowels(str) {
    let arr = [];

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            
        }
        else {
            arr.push(str.charAt(i));
        }
    }
    return arr;
}

console.log(removeVowels('Mississippi'));