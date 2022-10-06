var today = moment();
$("#currentDay").text(today.format("ddd MMM/Do/YYYY"));

//var saveButton = document.getElementsByClassName("save");
//saveButton.setAttribute("style", "backgroundColor:blue");

var btnEl = document.querySelectorAll("button");

for (var i = 0; i < btnEl.length; i++) {
btnEl[i].setAttribute("style", "color:blue");
}