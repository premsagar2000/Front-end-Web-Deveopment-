function vowelCount(str) {
    let count_a = 0;
    let count_e = 0;
    let count_i = 0;
    let count_o = 0;
    let count_u = 0;
    
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == 'a') {
            ++count_a;
            continue;
        }
        if(str.charAt(i) == 'e') {
            ++count_e;
            continue;
        }
        if(str.charAt(i) == 'i') {
            ++count_i;
            continue;
        }
        if(str.charAt(i) == 'o') {
            ++count_o;
            continue;
        }
        if(str.charAt(i) == 'u') {
            ++count_u;
            continue;
        }
    }

    return {
        'string': str,
        'a': count_a,
        'e': count_e,
        'i': count_i,
        'o': count_o,
        'u': count_u
    }
}

console.log(vowelCount('Web Engineering'));