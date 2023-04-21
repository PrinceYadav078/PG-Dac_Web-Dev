function myfun(){
    console.log("function called")
    // console.log(document)
    // console.log(typeof document)
    var amt=document.getElementById("x1").value
    // console.log(amt)
    var roi=document.getElementById("x2").value
    // console.log(roi)
    var duration=document.getElementById("x3").value
    // console.log(duration)
     var p=parseInt(amt)
     var r=parseFloat(roi)
     var t=parseInt(duration)
     r=r/12/100
     t=t*12
    //  console.log(p)
    //  console.log(r)
    //  console.log(t)
    var emi =Math.ceil(p*r*(1+r)**t/((1+r)**t-1))
    console.log(`emi is ${emi}`)
    var tot_amt=t*emi;
    console.log(tot_amt)
    var interest= tot_amt-p
    console.log(interest)
    // Repalce the default value of emi which is 123 to emi which we have calculated 
    document.getElementById("m1").innerHTML=`&#8377; ${emi}`
    document.getElementById("p1").innerHTML=`&#8377; ${p}`
    document.getElementById("ta1").innerHTML=`&#8377; ${tot_amt}`
    document.getElementById("int1").innerHTML=`&#8377; ${interest}`

  



}