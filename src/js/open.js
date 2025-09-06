// TODO:secure the email https://smtpjs.com/

function sendEmil(){
    Email.send({
    SecureToken: "41ffbe38-9b39-4ff5-b370-29a835495402",
    To : 'garrisonweb2024@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "name:" + document.getElementById("name").value + 
        "<br> Email:" + document.getElementById("email").value +
        "<br> phone:" + document.getElementById("phone").value +
        "<br> Message:" + document.getElementById("message").value

      
}).then(
  message => alert(message )
);
}

