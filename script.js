 x=document.getElementById("nam")
 y=document.getElementById("eml")
 z=document.getElementById("psw")
 function func() {
     if (x.value==""||y.value==""||z.value=="") {
         alert("please, fill out all application.")
     }
     else
     {
        document.getElementById("Name").innerHTML="Name:"+ x.value
        document.getElementById("Email").innerHTML="Email:"+y.value
        document.getElementById("Password").innerHTML="Password:"+ z.value
     }
}
document.getElementById("click").addEventListener("click",func)
