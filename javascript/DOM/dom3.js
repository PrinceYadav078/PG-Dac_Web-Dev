function Add(){
    let n1=document.getElementById("x1").value
    let n2=document.getElementById("x2").value
    if(n1==""||n2==""){
        alert("all values are required")
    }else if(isNaN(n1)||isNaN(n2)){
        alert("Only Numbers are Allowed")
    }else{
        let ans=parseFloat(n1)+parseFloat(n2)
        document.querySelector("span").innerHTML=ans
        document.querySelector("span").style.fontWeight="bold"
        document.querySelector("span").style.fontSize="25px"
    }
    
}
