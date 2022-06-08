const api_key="https://masai-vouchers-api.herokuapp.com/api/vouchers";


var amoun=JSON.parse(localStorage.getItem("user")) 
var pr=document.getElementById("pr")
pr.innerText=amoun.amount
async function getData(){
    try{
        let response=await fetch(api_key);
        let vouch=await response.json();
        let data=vouch[0].vouchers
        append(data);
       //  console.log(vouch)
    }
    catch(err)
    {
        console.log(error)
    }
    
}
getData()

function append(data){

    var cont=document.getElementById("voucher_list")
    data.forEach(function(el,index)
    {
        var box=document.createElement("div");
        box.setAttribute("class","voucher");

        var image=document.createElement("img");
        image.src=el.image;
        image.style.height="300px";
        image.style.width="250px";

        var name=document.createElement("p");
        name.innerText=el.name;

        var price=document.createElement("p");
        price.innerText=el.price;

        var buy=document.createElement("button");
        buy.innerText="BuY";
        buy.addEventListener("click",function(){
            MyFun2(index)
        })
 
        cont.append(box);
        box.append(image,name,price,buy)
        
        function MyFun2(index){
  
            console.log(data)
            
             localStorage.setItem("purchase",JSON.stringify(data[index]));
        }
       
    })
   
}




