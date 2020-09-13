function openNav() {
  document.getElementById("mynav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mynav").style.height = "0%";
}

//Get the button:
window.onload = function() {var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
}
