window.onscroll = function(){fixNav()}

var navbar = document.getElementById('stickyNav');

var sticky = navbar.offsetTop;

function fixNav(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  }else{
    navbar.classList.remove("sticky")
  }
}