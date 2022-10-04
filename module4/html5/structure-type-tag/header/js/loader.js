var myLoader;
function Mydata()
{
    myLoader=setTimeout('shw()',1000);
}
function shw()
{
    document.getElementById('loader').style='display:none';
    document.getElementById('main-content').style='display:block';
}