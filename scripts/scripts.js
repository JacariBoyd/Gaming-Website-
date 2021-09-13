var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

$(".menu-btn").click(function () {
  $(".side-bar").addClass("active");
  $;
});

$(".close-btn").click(function () {
  $(".side-bar").removeClass("active");
});
