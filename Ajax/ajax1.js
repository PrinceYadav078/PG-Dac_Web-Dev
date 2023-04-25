// dom event handler

document.querySelector("#b1").onclick = () => {
  var xmlhttp = new XMLHttpRequest(); // creating an instance of class XMLHttpRequest
  // console.log(xmlhttp)
  // console.log(typeof xmlhttp)
  // console.log(xmlhttp.readyState)

  xmlhttp.open("get", "https://fakestoreapi.com/products", true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = () => {
    console.log(xmlhttp.readyState, xmlhttp.status);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // console.log(typeof xmlhttp.responseText) // string
      // console.log(xmlhttp.responseText)
      var ans = JSON.parse(xmlhttp.responseText);
      // console.log(typeof ans) // object
      // console.log(ans) // array of object
      for (a of ans) {
        console.log(a);
        // document.querySelector(".row").append(divtag)
        var divtag=document.createElement("div")
        divtag.className="col-3 border border-warning"
        var imgtag=document.createElement("img")
        imgtag.className="img-fluid"
        imgtag.src=a.image
        divtag.append(imgtag)
        var h2tag=document.createElement("h2")
        divtag.append(h2tag)
        var ptag=document.createElement("p")
        divtag.append(ptag)
        // document.querySelector(".row").append(divtag)
        h2tag.innerHTML=a.price
        ptag.innerHTML=a.title
        document.querySelector(".row").append(divtag)


      }
    }
  };
};
