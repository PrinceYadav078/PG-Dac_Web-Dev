let obj={
    name:"Prince",
    add:{
        country:"India",
        state:{
            code:"dl",
            pin:283203
        }
    }
}

// let obj2=obj;
// obj2.name="Tanmay" // name property changes in both object obj and obj2 bcz both point a same memory locaton which is create on heap
// console.log(obj);  
// console.log(obj2);

// let obj2={...obj}      // shallow copy
// obj2.name="tanmay"   // now both object point to the different memory location but inside obj object add and state object point to same memory location     
// console.log(obj);  
// console.log(obj2);

// obj2.add.country="U.S"
// console.log(obj);   //country:"US"
// console.log(obj2);  //country:"US"
//we change obj2 country name but both object changes county name this problem occur bcz we spread only obj object we have to spread add and state object also so we create whole object new memory location on heap  

let obj2={...obj,add:{...obj.add,state:{...obj.add.state}}}
obj2.name="tanmay"   
obj2.add.country="U.S"
obj2.add.state.code="agra"
console.log(obj);  
console.log(obj2);