function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementById("dark").style.visibility = "hidden";
  document.getElementById("light").style.visibility = "visible";
}

function light() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementById("dark").style.visibility = "visible";
  document.getElementById("light").style.visibility = "hidden";
}