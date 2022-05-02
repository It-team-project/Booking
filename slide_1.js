alert("Wellcome, to Booking website");
function hello() {
    let txt;
    let name = prompt("Please enter your name:", "");
    if (name == null || name == "") {
      txt = "User cancelled.";
    } else {
      txt = "Hello " + name + "! How are you ?";
    }
    document.getElementById("hell").innerHTML = txt;
}
hello();
function daymode(){
    document.getElementById('body').style.backgroundImage= 'url("images-project/image_2.jpg")';
    document.getElementById('hell').style.color='black';
    document.getElementById('cookie1').style.color='black';
}
function nightmode(){
    document.getElementById('body').style.backgroundImage= 'url("images-project/image_1.jpg")';
    document.getElementById('hell').style.color='white';
    document.getElementById('cookie1').style.color='white';

}
function lnk1(){
    document.getElementById('ifr').src='https://ahmed-alsakhawy.github.io/luxor-city';
    document.getElementById("difr").style.display = "block";
    document.getElementById("butt").style.display = "block";
    document.getElementById("ifr").style.display = "block";

}
function dislnk1(){
    document.getElementById("difr").style.display = "none";
    document.getElementById("butt").style.display = "none";
}
function lnk2(){
    document.getElementById('ifr').src='https://it-team-project.github.io/Aswan/';
    document.getElementById("difr").style.display = "block";
    document.getElementById("butt").style.display = "block";
    document.getElementById("ifr").style.display = "block";

}
function dislnk2(){
    document.getElementById("difr").style.display = "none";
    document.getElementById("butt").style.display = "none";
}
function lnk3(){
    document.getElementById('ifr').src='https://a7medmahmoud116.github.io';
    document.getElementById("difr").style.display = "block";
    document.getElementById("butt").style.display = "block";
    document.getElementById("ifr").style.display = "block";

}
function dislnk3(){
    document.getElementById("difr").style.display = "none";
    document.getElementById("butt").style.display = "none";
}
function lnk4(){
    document.getElementById('ifr').src='https://ahmednoaman35.github.io/alex/';
    document.getElementById("difr").style.display = "block";
    document.getElementById("butt").style.display = "block";
    document.getElementById("ifr").style.display = "block";

}
function dislnk4(){
    document.getElementById("difr").style.display = "none";
    document.getElementById("butt").style.display = "none";
}
function lnk5(){
    document.getElementById('ifr').src='https://it-team-project.github.io/Monuments-Sohag/';
    document.getElementById("difr").style.display = "block";
    document.getElementById("butt").style.display = "block";
    document.getElementById("ifr").style.display = "block";

}
function dislnk5(){
    document.getElementById("difr").style.display = "none";
    document.getElementById("butt").style.display = "none";
}
function lnk6(){
    document.getElementById('ifr').src='https://ahmed12362.github.io/Content-1/';
    document.getElementById("difr").style.display = "block";
    document.getElementById("butt").style.display = "block";
    document.getElementById("ifr").style.display = "block";

}
function dislnk6(){
    document.getElementById("difr").style.display = "none";
    document.getElementById("butt").style.display = "none";
}
function lnk7(){
    document.getElementById('ifr').src='#Giza';
    document.getElementById("difr").style.display = "block";
    document.getElementById("butt").style.display = "block";
    document.getElementById("ifr").style.display = "block";

}
function dislnk7(){
    document.getElementById("difr").style.display = "none";
    document.getElementById("butt").style.display = "none";
}
function formm(){var forms = document.forms["frm"];//form
let person = "";
for (let i = 0; i < forms.length; i++) {
  person += forms.elements[i].value + "<br>";//information form in person
}

}
document.getElementById("cookie1").innerHTML="cookie Enabled is " + navigator.cookieEnabled;
