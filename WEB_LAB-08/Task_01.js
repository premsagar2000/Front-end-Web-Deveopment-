// function raceResults(arr){
    
//     let [first,second, third, ...args] =  arr;

//     console.log(first);
//     console.log(second);
//     console.log(third);
//     console.log(args);    
// }


// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])



raceResults = () => {
    let [x,y, z, ...args] = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];
    return{
            first:x,
            second:y,
            third:z,
            rest:args
        };
}
console.log(raceResults)



// let arr=['Tom', 'Margaret', 'Allison', 'David', 'Pierre']
//         function raceResult(arr){
//             var [x,y,z,...remaining]=arr
//             return{
//                 first:x,
//                 second:y,
//                 third:z,
//                 rest:remaining
//             };
//         }


// raceResult()