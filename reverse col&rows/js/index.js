let arr = [
    [2,5,8,6,7,4,7],
    [5,9,2,3,6,6,8],
    [7,2,3,7,3,2,3],
    [5,1,4,2,8,1,2],
    [2,3,7,4,2,5,1],
]

// the different solutions show the thinking progress i had. 
// so the last solution is mostly the shortest or best. 


//* i could think of two ways: 1. is using map // 2. is using for loop 


// ------------ first map solution : 

// function reverse(a) {
//     return Object.keys(a[0]).map(function(c) {
//         return a.map(function(r) { return r[c]; });
//     });
// }
// console.log(reverse(arr));

// ---------- second map solution same as above a LITTLE shorter

 //* i could write an empty parameter that wont be used instead of _ for example :(col, c)
 //* because its a matrix it needs two parameters.. even you don't use one you have to pass it.

//  function reverse(arr) { 
//     return arr[0].map(function (_, c) { return arr.map(function (r) { return r[c]; }); });
// } 
//  console.log(reverse(arr));


// ----------- third map solution -- the SHORTEST solution

let newArr = arr[0].map((_, c) => arr.map((_, r) => arr[r][c]))
console.log(newArr);




// solving Task with for loop --- -- 

// let arr2 = []
// for (let i = 0; i < 7; i++) {
//     arr2[i] = []
//     for (let x = 0; x < 5; x++) {
//         arr2[i][x]=arr[x][i]
//         console.log(arr2[i][x]);
//     }
// }

/// ------------ solving with for loop but without counting the col and rows

// let arr2 = []
// for (let i = 0; i < arr[0].length; i++) {
//     arr2[i] = []
//     for (let x = 0; x < arr.length; x++) {
//         arr2[i][x]=arr[x][i]
//         console.log(arr2[i][x]);
//     }
// }



// the array arr should look like this when the task is solved 
// output : 
arr3 =[
    [2,5,7,5,2],
    [5,9,2,1,3],
    [8,2,3,4,7],
    [6,3,7,2,4],
    [7,6,3,8,2],
    [4,6,2,1,5],
    [7,8,3,2,1]
    
]