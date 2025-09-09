function sendEmil(){
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    sub: document.getElementById("sub").value,
    message: document.getElementById("message").value
  }

  emailjs.send("service_t7hmv4b","template_01zrjn8").then(alert("emil sent thank you for your message"))
}