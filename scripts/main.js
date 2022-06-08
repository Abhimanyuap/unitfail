console.log("im in");
function Inform(na,em,ad,am){
  this.name=na;
  this.email=em;
  this.address=ad;
  this.amount=am;

}

function MyFun(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var address=document.getElementById("address").value;
    var amount=document.getElementById("amount").value;
    
    let info=new Inform(name,email,address,amount);
    
    localStorage.setItem("user",JSON.stringify(info));
    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("address").value=null;
    document.getElementById("amount").value=null;
}