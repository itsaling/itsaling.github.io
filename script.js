const openNav = () => {
  const navLink = document.querySelector(".nav-links");
  const burger = document.querySelector("#hamburger");

  const write = document.getElementById("write");

  const logo = document.querySelector(".logo");

  burger.addEventListener("click", () => {
    navLink.classList.toggle("nav-slide");
  });
};

$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass(
    "active"
  );
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("nav").addClass("active");
  } else {
    $("nav").removeClass("active");
  }
});

function openModal(imgs) {
  let expandImg = document.getElementById("expand-img");

  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
function openModal2(imgs) {
  let expandImg = document.getElementById("expand-img2");

  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
function openModal3(imgs) {
  let expandImg = document.getElementById("expand-img3");

  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
function openModal4(imgs) {
  let expandImg = document.getElementById("expand-img4");

  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
