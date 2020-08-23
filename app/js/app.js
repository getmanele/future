// $(document).ready(function () {
//   $("body").hide();
// });

document.getElementsByClassName("normal").onclick = function () {
  document.getElementsByClassName("www").classList.toggle("normal_id");
  document.getElementsByClassName("www").classList.remove("reverse_id");
};

document.getElementsByClassName("reverse").onclick = function () {
  document.getElementsByClassName("www").classList.toggle("reverse_id");
  document.getElementsByClassName("www").classList.remove("normal_id");
};

// document.querySelectorAll("normal").onclick = function () {};
