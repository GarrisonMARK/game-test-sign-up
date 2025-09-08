 bugy = function bugy(copyId){
    let inputElement = document.createElement("input")
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy')
    document.body.removeChild(inputElement)
  }

  // TODO:secure the email https://smtpjs.com/

function sendEmil(){
  Email.send({
  SecureToken: "ccdb73c9-9ac4-43de-966f-f10fa089b6a3",
  To : 'robotsamanthagarrisonweb@gmail.com',
  From : document.getElementById("#email").value,
  Subject : "This is the subject",
  Body : "name:" + document.getElementById("name").value + 
      "<br> Email:" + document.getElementById("email").value +
      "<br> phone:" + document.getElementById("phone").value +
      "<br> Message:" + document.getElementById("message").value

    
}).then(
message => alert(message)
);
}

// const txt1 = document.getElementById('inPutBox1')
// const btn1 = document.getElementById('btn1')
// const out1 = document.getElementById('output1')

const txt2 = document.getElementById('inPutBox2')
const btn2 = document.getElementById('btn2')
const out2 = document.getElementById('output2')



// function sour1(){
//     out1.innerHTML = txt1.value;
// }
function sour2(){
    out2.innerHTML = txt2.value;
}


// btn1.addEventListener("click",sour1)
btn2.addEventListener("click",sour2)


let box = document.querySelector(".chang-1" )
let boxw = document.querySelector(".chang-2" )

appendToDisplay1 = function appendToDisplay(){ 
box.style.coler = inPutBox1.value;
box.style.background = inPutBox1.value;
};

appendToDisplay2 = function appendToDisplay(){ 
boxw.style.coler = inPutBox2.value;
boxw.style.background = inPutBox2.value;
};