$(function () {
  let baseline = -200;
  let footerline = 300;

  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + baseline;
  let con5 = $("#con5").offset().top + baseline;
  let con6 = $("#con6").offset().top;
  let footer = $("footer").offset().top + footerline;
  // console.log(con1, con2, con3, con4);

  // 비주얼 active
  $(".logo li:first-child").addClass("active");
  $(".logo li:last-child").addClass("active");
  $(".usLogo1").addClass("active");
  $(".logoLine").addClass("active");
  $(".ring").addClass("active");

  // 헤더 underline
  $("header li").on("mouseenter", function () {
    $(this).children("div").stop().animate({ width: "130%" });
  });

  $("header li").on("mouseleave", function () {
    $(this).children("div").stop().animate({ width: "0%" });
  });

  //헤더 클릭 이동
  $("header li").on("click", function () {
    let i = $(this).index();
    let target = $("#container section").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: target });
  });

  //네비 클릭 이동
  $("#navi li").on("click", function () {
    num = $(this).index();
    let target = $("#container section").eq(num).offset().top;
    $("html, body").stop().animate({ scrollTop: target });
  });

  //Portfolio 페이드
  let total = $(".mockupWrap > li").length;
  // console.log(total);
  let i = 0;
  start();

  function fade() {
    $(".mockupWrap>li").fadeOut();
    $(".mockupWrap>li").eq(i).fadeIn();
  }

  function start() {
    timer = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }
      fade();
    }, 4000);
  }

  $(".next").on("click", function () {
    clearInterval(timer);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    fade();
    start();
  });

  //스크롤 이벤트
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    // console.log(scroll);

    if (scroll >= con1 && scroll <= con2) {
      //con1
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");

      $("#navi").css({ opacity: "0" });
      $("header").css({ opacity: "0" });
    } else if (scroll >= con2 && scroll <= con3) {
      //로고
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });

      $(".popLogo li").addClass("active");
      $(".popLogo").addClass("active");
      $(".dicWord").addClass("active");
      $(".dicMean").addClass("active");
      $(".exp1").addClass("active");
      $(".exp2").addClass("active");
      $(".logowrap h3").addClass("active");
      $(".logowrap h2").addClass("active");
      $(".logowrap").addClass("active");
    } else if (scroll >= con3 && scroll < con4) {
      //자기소개
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });

      $(".statusBar").addClass("active");
    } else if (scroll >= con4 && scroll < con5) {
      // 퍼블리싱
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });

      // $("#con2 li").addClass("up");
    } else if (scroll >= con5 && scroll < con6) {
      // 자바&리액트
      $("#navi li").removeClass("on");
      $("#navi li").eq(4).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });
    } else if (scroll >= con6 && scroll < footer) {
      // 일러스트
      $("#navi li").removeClass("on");
      $("#navi li").eq(5).addClass("on");

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });

      $(".imgBox").addClass("active");
    } else {
      // 컨텍트

      $("#navi").css({ opacity: "1" });
      $("header").css({ opacity: "1" });

      $("footer .img").addClass("active");
    }
  });
});
