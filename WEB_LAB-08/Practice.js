// //Enhanced Object Literal
// let fname ="Prem"
// let lname = "Sagar"
// let age = 18

// let obj = {fname,lname, age};

// console.log(obj);



// //Computed Property
// let NAME = "Prem";
// obj = {[NAME]: "Asad"}

// console.log(obj);


// //Template String/ Literal

// let str = `
// I am ${fname},
// my last name is ${lname},
// I am ${age}
// `
// console.log(str);



// // Destructuring of array or objects
// let obj1={name:"naveed", age:23, address:{city:"Naudero", street:{streetNo:123, streetName:"Goli Mar"}}}
// console.log(obj1.address.street.streetNo); // Inefficient

// let {name, address:{street:{streetNo}}, address:{street}} = obj1;
// console.log(name, street, streetNo)


// //Destructuring in arrays
// let arr = [1,2,3,4,5,6,7,8,9]
// const [x,y,z,,,,,six] = arr
// console.log(x,y,z,six)


// // REST AND SPREAD

// function sum (name , ...args){
//     let sum=0;
//     // for(let i=0;i<args.length;i++){
//     //         sum+=args[i];

//     // }
//     sum= args.reduce((prev, item, next)=> item+prev);
//     console.log(sum);
// }
// arr = [1,2,3,4]
// sum("Prem", ...arr)


// arr = [1,2,3,4,5,6,7];

// let [x,y,z, ...args] = arr;
// console.log(args)
