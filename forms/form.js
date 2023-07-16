function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "chandranpsharath@gmail.com",
    Password: "14068E8169D2DAA1C841DE9B10EBD6F64FCC",
    To: "chandranpsharath@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body: document.getElementById("message").value,
  }).then((message) => alert(message));
}
