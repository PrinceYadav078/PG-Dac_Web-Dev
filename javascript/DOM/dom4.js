function m1(cur_elem){
    // console.log(Math.random())
    // console.log(cur_elem.class)
    // console.log(cur_elem.src)
    var new_path=cur_elem.src.replace("128/128" , "832/832")
    // console.log(new_path)
    document.querySelector("#x1").src=new_path
    // cur_elem.className = "img-fluid border-info"
    
}