document.addEventListener("DOMContentLoaded", () => {
  //inital page load animation

  anime
    .timeline({
      easing: "easeOutExpo"
    })

    .add({
      targets: ".pink-box",
      translateX: [-600, -120],
      duration: 2000
    })
    .add({
      targets: ".dots",
      translateY: [700, 0],
      duration: 2000,
      offset: "-=2000"
    })
    .add({
      targets: ".first,  .job-title",
      translateY: [60, 0],
      duration: 2000,
      opacity: [0, 1],
      offset: "-=1000"
    })
    .add({
      targets: ".last, .project",
      translateY: [60, 0],
      opacity: [0, 1],
      duration: 2000,
      offset: "-=1500"
    })
    .add({
      targets: ".pink-dots",
      translateY: [-300, 0],
      duration: 2000,
      offset: "-=3000"
    })
    .add({
      targets: ".intro-text p",
      translateX: [1500, 0],
      duration: 3000,
      offset: "-=2500",
      delay: (el, i) => 200 * i
    })
    .add({
      targets: ".purple-triangle",
      translateX: [600, 0],
      duration: 3000,
      offset: "-=2500"
    })

    .add({
      targets: ".skills h1, .familiar ",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: (el, i) => 200 * i,
      offset: "-=3200"
    })
    .add({
      targets: ".icon-wrapper img",
      translateX: [1500, 0],
      duration: 1000,
      delay: (el, i) => 100 * i,
      offset: "-=3500"
    });
});
