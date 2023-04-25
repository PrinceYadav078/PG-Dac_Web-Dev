$("#b1").click(function () {
  var data = $("#x1").val().toLowerCase();
  console.log(data);
  var api = `https://fakestoreapi.com/products/category/${data}`;
  console.log(api);

  $.ajax({
    type: "get",
    url: api,
    success: function (result) {
      console.log(result);
      $(".row").empty();
      for (a of result) {
        var divtag = document.createElement("div");
        divtag.className = "col-3 border border-warning";
        var imgtag = document.createElement("img");
        imgtag.className = "img-fluid";
        imgtag.src = a.image;
        divtag.append(imgtag);
        var h2tag = document.createElement("h2");
        divtag.append(h2tag);
        var ptag = document.createElement("p");
        divtag.append(ptag);
        h2tag.innerHTML=a.price
        ptag.innerHTML=a.title
        document.querySelector(".row").append(divtag)
      }
    },
  });
});
