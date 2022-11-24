function validation()
{
    if(document.frm.name.value=="")
    {
        alert('Please fill your Name ..')
        document.frm.name.focus();
        return false;
    }
    var n=/^[A-Za-z]+$/;
    if(!n.test(document.frm.name.value))
    {
        alert('Please fill your name only in alaphabetic character ..')
        document.frm.name.focus();
        return false;
    }
    
    if(document.frm.lname.value=="")
    {
        alert('Please fill your LastName ..')
        document.frm.lname.focus();
        return false;
    }
    var l=/^[A-Za-z]+$/;
    if(!l.test(document.frm.lname.value))
    {
        alert('Please fill your Lastname only in alaphabetic character ..')
        document.frm.lname.focus();
        return false;
    }
    if(document.frm.uname.value=="")
    {
        alert('Please fill your UserName ..')
        document.frm.uname.focus();
        return false;
    }

    if(document.frm.email.value=="")
    {
        alert('Please fill your Email ..')
        document.frm.email.focus();
        return false;
    }
    var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!e.test(document.frm.email.value))
    {
        alert('Please fill valid email Address ..')
        document.frm.email.focus();
        return false;
    }
}
