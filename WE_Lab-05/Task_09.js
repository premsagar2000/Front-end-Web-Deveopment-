function printFirstAndLast(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i][0]+arr[i][arr[i].length-1])

    }
}


printFirstAndLast(['awesome','example','of','forEach'])