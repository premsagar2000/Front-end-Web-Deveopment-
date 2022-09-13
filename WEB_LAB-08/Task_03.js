function extend(arry1,array2){
    return [...arry1,...array2];
}

function addkeyVal(obj,key,val){
    let obj1 = {...obj}
    obj1[key] = val;
    return obj1;
}

function removeKey(obj,key){
    let newObj= {...obj}
    delete newObj[key]
    return newObj
}

function combine(obj1,obj2){
    return {...obj1,...obj2};
}

function update(obj,key,val){
    let obj1 ={...obj}
    obj1[key]=val;
    return obj1;
}


console.log(extend([1,2,3,4,5],[6,7,8,9]));
console.log(addkeyVal({name:'prem',age:18}, "caste", "Hindu"));
console.log(removeKey({name:'prem',age:18},"age"));
console.log(combine({name:"prem"}, {age:18, caste: "hindu"}))
console.log(update({name:'prem',age:18}, "name", "sagar"))
