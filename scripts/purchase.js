var comn=document.getElementById("purchased_vouchers");


var amoun=JSON.parse(localStorage.getItem("user")) ;
var pr=amoun.amount



var xo=JSON.parse(localStorage.getItem("purchase"))
let left=pr-xo.price
var h3=document.getElementById("pr")
h3.innerText=left;
var nh=document.getElementById("")
console.log(xo);


    var box=document.createElement("div");

    var image=document.createElement("img");
    image.src=xo.image;
    image.style.height="300px";
    image.style.width="250px";

    var name=document.createElement("p");
    name.innerText=xo.name

    var price=document.createElement("p");
    price.innerText=xo.price;


    comn.append(box);
    box.append(image,name,price)
