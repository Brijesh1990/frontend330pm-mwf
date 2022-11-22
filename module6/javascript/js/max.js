function mx()
{
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    var n3=document.getElementById("n3").value;
    if(n1>n2 && n1>n3)
    {
        //document.write("N1 is max number");
        document.getElementById("demo").innerHTML="N1 is max number";
    }
    else if(n2>n3 && n2 >n1)
    {
        //document.write("N2 is max number");
        document.getElementById("demo").innerHTML="N2 is max number";
    }
    else 
    {
        //document.write("N3 is max number");
        document.getElementById("demo").innerHTML="N3 is max number";
    }
}

// check simple interest
function si()
{
    var p=document.getElementById("p").value;
    var n=document.getElementById("n").value;
    var r=document.getElementById("r").value;
    var simple=p*n*r/100;
    document.getElementById("demo").innerHTML="Simple interest is :"+simple;
}

// check coumpound interest
function ci()
{
    var p=document.getElementById("p").value;
    var n=document.getElementById("n").value;
    var r=document.getElementById("r").value;
    var cmp=p*(Math.pow((1+r/100),n));
    document.getElementById("demo").innerHTML="Compund interest is :"+cmp;
}