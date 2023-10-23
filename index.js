sideBar = document.querySelector("#side-bar");
menuIcon = document.querySelector(".menu-icon");
overlay = document.querySelector(".overlay");
body = document.querySelector("body");

function openSideBar() {
  sideBar.classList.remove("animate__fadeOutLeft");
  sideBar.classList.add("animate__fadeInLeft");
  sideBar.style.display = "block";
  overlay.classList.add("active");
  body.style.overflow = "hidden"; // quito el scroll cuando  el sideBar este abierto
}

document.addEventListener("click", (e) => {
  if (e.target !== sideBar && e.target !== menuIcon) {
    closeSideBar();
  }
});

sideBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

function closeSideBar() {
  sideBar.classList.remove("animate__fadeInLeft");
  sideBar.classList.add("animate__fadeOutLeft");
  overlay.classList.remove("active");
  body.style.overflow = 'auto'; // añado nuevamente el scroll cuando se cierra el sideBar
}


function goToSection(scrollSection) {
  closeSideBar();
  document.getElementById(`${scrollSection}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
}
