document.addEventListener("DOMContentLoaded", () => {
  //inital page load animation
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 2000
  });
  tl.add({
    targets: ".pink-box",
    translateX: [-600, -120]
  })
    .add({
      targets: ".dots",
      translateY: [700, 0],
      offset: "-=2000"
    })
    .add({
      targets: ".first,  .job-title",
      translateY: [60, 0],
      opacity: [0, 1],
      offset: "-=1500"
    })
    .add({
      targets: ".last, .project",
      translateY: [60, 0],
      opacity: [0, 1],
      offset: "-=1500"
    })
    .add({
      targets: ".pink-dots",
      translateY: [-2000, 0],
      offset: "-=2000"
    })
    .add({
      targets: ".intro-text p",
      translateX: [1500, 0],
      offset: "-=2500",
      delay: (el, i) => 200 * i
    })
    .add({
      targets: ".purple-triangle",
      translateY: [600, 0],
      offset: "-=2500"
    })
    .add({
      targets: ".icon-wrapper img",
      translateX: [1500, 0],
      delay: (el, i) => 100 * i,
      offset: "-=2800"
    })
    .add({
      targets: ".grid-item2",
      translateY: [100, 0],
      opacity: [0, 1],
      offset: "-=3000"
    })
    .add({
      targets: ".light h4",
      translateY: [100, 0],
      opacity: [0, 1],
      offset: "-=3000",
      delay: (el, i) => 100 * i
    });
});
