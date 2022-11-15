// subtotal of cart
function test()
{
    document.getElementById("content").style="width:80%; height:auto; margin:auto; border:solid 1px gray; padding:15px";
}

function crt()
{
    var p=document.getElementById("price").value; 
    var q=document.getElementById("qty").value;
    var t=p*q;
    document.getElementById("tot").innerHTML=t;
}