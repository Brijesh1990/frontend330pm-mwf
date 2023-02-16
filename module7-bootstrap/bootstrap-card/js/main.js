function login()
{
    var mobile=document.getElementById("mobile").value;
    var pass=document.getElementById("pass").value;

    if(mobile=='9998003879' && pass=='9998003879')
    {
        alert('You are successfully Logged in!')
        window.location='dashboard.html';
    }
    else 
    {
        alert('Your mobile and password are wrong!')
        window.location='index.html';

    }
}