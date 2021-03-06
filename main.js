var textBox = document.getElementById("squatText");
var pos = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);
});

// Mobile Nav

let menu_icon = document.getElementById("navBarMobile");
let side_nav = document.getElementById("side_nav");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

side_nav.style.right = "-360px";

menu_icon.onclick = function () {
  if (side_nav.style.right == "-360px") {
    side_nav.style.right = "0";
  } else {
    side_nav.style.right = "-360px";
  }
};

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navTop").style.top = "0";
  } else {
    document.getElementById("navTop").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

/****************************************** */

const heroText = document.querySelector('.heroImageText');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `heroImageText 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(heroText);

