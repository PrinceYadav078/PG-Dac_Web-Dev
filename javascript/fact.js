fact=1;
var n=prompt("enter number")
for(i=1;i<=n;i++){
    fact*=i;
}
document.getElementById("res").innerHTML= `fact of ${n} =>  ${fact}`
// console.log(fact);