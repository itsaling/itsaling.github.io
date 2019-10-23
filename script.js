function attachNav() {
  $("#nav-placeholder").load("nav.html");
}

function navActive(e) {
  let activeLink = document.querySelectorAll(".active");
  [].forEach.all(activeLink, function(link) {
    link.classList.remove("active");
  });
  e.target.className = "active";
}
