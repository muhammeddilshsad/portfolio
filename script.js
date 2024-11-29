function sendmail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

const serviceID="service_ge9ms5a";
const templateID="template_i6he01s";


emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res);
    alert("your send message succesful");

}
)
.catch((err)=> console.log(err));

}


