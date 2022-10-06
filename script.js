

$("#currentDay").html(moment().format("ddd MMM/Do/YYYY"))



var presentHour = moment().format("HH")


if(presentHour > 9){
    $("#9").addClass("past")}
else if(presentHour ==9) {
    $('#9').addClass("present")}
else { $("#9").addClass("future")}

if(presentHour > 10){
    $("#10").addClass("past")}
else if(presentHour ==10) {
    $('#10').addClass("present")}
else { $("#10").addClass("future")}

if(presentHour > 11){
    $("#11").addClass("past")}
else if(presentHour ==11) {
    $('#11').addClass("present")}
else { $("#11").addClass("future")}

if(presentHour > 12){
    $("#12").addClass("past")}
else if(presentHour ==12) {
    $('#12').addClass("present")}
else { $("#12").addClass("future")}

if(presentHour > 13){
    $("#13").addClass("past")}
else if(presentHour ==13) {
    $('#13').addClass("present")}
else { $("#13").addClass("future")}

if(presentHour > 14){
    $("#14").addClass("past")}
else if(presentHour ==14) {
    $('#14').addClass("present")}
else { $("#14").addClass("future")}

if(presentHour > 15){
    $("#15").addClass("past")}
else if(presentHour ==15) {
    $('#15').addClass("present")}
else { $("#15").addClass("future")}

if(presentHour > 16){
    $("#16").addClass("past")}
else if(presentHour ==16) {
    $('#16').addClass("present")}
else { $("#16").addClass("future")}

if(presentHour > 17){
    $("#17").addClass("past")}
else if(presentHour ==17) {
    $('#17').addClass("present")}
else { $("#17").addClass("future")}

function renderLastTask() {
    for( i = 9; i < 18; i++ ) {
var toDo = localStorage.getItem(i) || []
var textBox = document.getElementById(i)
textBox.textContent = toDo
}
}
renderLastTask()

$("button").click(function(event){
 event.preventDefault;
   
var taskValue = $(this).siblings(".description").val()
console.log(taskValue)

var time = $(this).parent().children().eq(1).attr("id");
console.log(time)

localStorage.setItem(time,taskValue);

})