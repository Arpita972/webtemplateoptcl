
$(document).ready(function () {

  

// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Welcome to", "OPTCL E-map digitization"],
  typeSpeed: 100,
  backSpeed: 30,
  loop: true,
});


//For fixing header
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


});