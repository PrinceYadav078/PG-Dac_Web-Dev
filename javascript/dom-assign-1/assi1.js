// MYFUN1 RELATED TO TASK1 
function myfun1(){
    console.log("function called")

    let amt=parseInt(document.getElementById("x1").value)
    let disc=parseFloat(document.getElementById("x2").value)
    // console.log(amt)
    // console.log(disc)
    // console.log(typeof amt)
    // console.log(typeof disc)
 let discount =disc*amt/100
 let fin_amt=amt-discount
//  console.log(discount)
//  console.log(fin_amt)
document.getElementById("m1").innerHTML=`&#8377; ${discount}`
document.getElementById("m2").innerHTML=`&#8377; ${fin_amt}`

}
// myfun2 related to TASK2
function myfun2(){
    let amt=parseInt(document.getElementById("y1").value) 
    let r=parseFloat(document.getElementById("y2").value) 
    let t=parseInt(document.getElementById("y3").value) 
    // console.log(amt)
    // console.log(r)
    // console.log(t)
    let si=amt*r*t/100
    document.getElementById("si").innerHTML=`&#8377; ${si}`
}
//myfum3 related to Task3
function myfun3(){
    let wkg=parseInt(document.getElementById("z1").value)
    let wgm=wkg*1000
    document.getElementById("w").innerHTML=wgm
}