// Destructuring => it is a convinient way of extracting properties from array and object 

let arr=[1,2,3,4]

// destructuring
//let [a,b,c,d]=arr;
// console.log(a,b,c,d)  // output 1 2 3 4 

// let [a,b,c]=arr;
// console.log(a,b,c);  //output 1 2 3

// let [a,b,,d]=arr;     // skip the value of  c which is in between b and d
// console.log(a,b,d);  // output 1 2 4

let [a,b,c,d,extra=5]=arr;
console.log(a,b,c,d,extra);  // output 1 2 3 4 5
