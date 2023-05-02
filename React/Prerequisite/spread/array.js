let arr=[1,2,3]

// let arr2=arr;
// arr2.push(4)
// console.log(arr)   //output [1,2,3,4]  
//we changing arr2 but both array are changing bcz arr and arr2 point the same memory location arrar memory location creates on heap and array varible (arr, arr2) create on stack   solution of this problem is spred operator
// console.log(arr2)  //output [1,2,3,4]  

let arr2=[...arr]
arr2.push(4)
console.log(arr);
console.log(arr2);