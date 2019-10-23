function attachNav() {
  $("#nav-placeholder").load("nav.html");
}

function navActive() {
  $('#nav-links a[href^="/' + location.pathname.split("/")[1] + '"]').addClass(
    "active"
  );
}
