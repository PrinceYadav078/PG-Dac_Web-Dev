
let obj={
    name:"prince",
    age:22,
    sal:"10lpa"
}

// let {name,age,sal}=obj
// console.log(name,age,sal);

// let {name,age,sal,extra="default value"}=obj
// console.log(name,age,sal,extra);

// let {name:firstname,age,sal,extra="default value"}=obj
// console.log(firstname,age,sal,extra);

// Nested Object

let obj2={
    name:"Prince",
    add:{
        country:"India",
        state:{
            code:"dl",
            pin:283203
        }
    }
}
// let{name}=obj2
// console.log(name)
// let {add:{country}}=obj2
// console.log(country);
// let {add:{state:{code,pin}}}=obj2
// console.log(code, pin);

let {name,add:{country,state:{code,pin}}}=obj2
console.log(name, country, code, pin);