// preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
// preloader end

// odd click
var clickCounter = 0;
var menu = document.getElementById("menu");
menu.onclick = function click() {
  clickCounter++;
  if (clickCounter % 2 != 0) {
    //is odd
    openNav();
  } else {
    //is even
    closeNav();
  }
};
//
var trans = document.getElementById("trans");
trans.onclick = function click2() {
  clickCounter++;
  closeNav();
};
// odd click end

// sidenav open
function openNav() {
  document.getElementById("sidenav").style.width = "40%";
  document.getElementById("trans").style.width = "60%";
  document.getElementById("bar1").classList.add("change1");
  document.getElementById("bar2").classList.add("change2");
  document.getElementById("bar3").classList.add("change3");
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("trans").style.width = "0";
  document.getElementById("bar1").classList.remove("change1");
  document.getElementById("bar2").classList.remove("change2");
  document.getElementById("bar3").classList.remove("change3");
}
// sidenav open end


// rec slider
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("rec-card");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "flex";  
//   dots[slideIndex-1].className += " active";
// }

// timing
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("rec-card");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
} 
// timing end
// rec slider end