// preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// odd click
var clickCounter = 0;
var trigger = document.getElementById("trigger");
trigger.onclick = function click() {
  clickCounter++;
  if (clickCounter % 2 != 0) {
    //is odd
    openNav();
  } else {
    //is even
    closeNav();
  }
};

var trans = document.getElementById("trans");
trans.onclick = function click2() {
  clickCounter++;
  closeNav();
};

// sidenav open
function openNav() {
  document.getElementById("sidenav").style.width = "40%";
  document.getElementById("trans").style.width = "60%";
  document.getElementById("trig1").classList.add("change1");
  document.getElementById("trig2").classList.add("change2");
  document.getElementById("trig2").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("trans").style.width = "0";
  document.getElementById("trig1").classList.remove("change1");
  document.getElementById("trig2").classList.remove("change2");
  document.getElementById("trig2").style.width = "50%";
}

//  counter
function count() {
  const counters = document.querySelectorAll(".value");
  const speed = 200;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
}