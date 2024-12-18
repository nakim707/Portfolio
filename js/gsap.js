$(function () {
  gsap.utils.toArray(".introduce").forEach(function (introduce) {
    gsap.timeline({
      scrollTrigger: {
        trigger: introduce,
        start: "top bottom",
        end: "bottom top",
        toggleClass: { targets: introduce, className: "active" },
        scrub: 2,
        // markers: true,
      },
    });
  });
  gsap.utils.toArray(".selfi").forEach(function (selfi) {
    gsap.timeline({
      scrollTrigger: {
        trigger: selfi,
        start: "top bottom",
        end: "bottom top",
        toggleClass: { targets: selfi, className: "active" },
        scrub: 2,
        // markers: true,
      },
    });
  });

  // con5 자바/리액트
  let upBox = document.querySelectorAll(".upBox");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#con5",
      pin: true, // 고정값
      scrub: 3,
      start: "top top",
      end: "+=400%", // 시작부분에서 400%까지 스크롤한 후 종료
      // markers: true,
    },
  });

  tl.from(upBox, {
    y: "400%",
    duration: 8, //8초 동안
    ease: "none", //가속도 없이
    stagger: 6,
  }); // 속성값은 중괄호에
  tl.to(upBox, {
    y: "0%",
  });

  // illust
  let illust = gsap.utils.toArray(".illust li");

  gsap.to(illust, {
    xPercent: -100 * (illust.length - 1),
    scrollTrigger: {
      trigger: "#con6",
      pin: true,
      scrub: 2,
      start: "center center",
      end: "200%",
      // markers: true,
    },
  });

  // contact turn
  let icon = gsap.utils.toArray("footer .img");

  // gsap.to(icon, {
  //   scrollTrigger: {
  //     trigger: "#con6",
  //     pin: true,
  //     scrub: 2,
  //     start: "top top",
  //     end: "bottom",
  //     toggleClass: { targets: icon, className: "active" },
  //     markers: true,
  //   },
  // });
});
