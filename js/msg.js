function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        massage: document.getElementById("massage").value,
    }
}
const serviceID = "service_uizjj1g";
const templateID = "template_vq54lvw"
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("massage").value = "";
        console.log(res);
        alert(" Your massage sent sucessfully");
    }) .catch((err) => console.log(err));