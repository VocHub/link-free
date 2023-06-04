function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="geraldgwapo" && password=="salamatshopee")
{
        window.open('login/login.html');
}
else
{
        alert("Login Failed");
        
}

}