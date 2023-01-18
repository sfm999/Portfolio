//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

// Open multiple pages - RSA and SHA1
$("a.RSA_SHA1").click(function (e) {
  e.preventDefault();
  window.open(
    "https://github.com/sfm999/Cryptology/blob/Crypto-Main/RSA_Signature_Scheme/RSA_Signature_Schema.java"
  );
  window.open(
    "https://github.com/sfm999/Cryptology/blob/Crypto-Main/RSA_Signature_Scheme/Modified_SHA1.java"
  );
});
