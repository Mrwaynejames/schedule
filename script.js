
setInterval(function() {
$("#currentDay").html(moment().format("ddd MMM/Do/YYYY"))
} , 1000);


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
    $("#1").addClass("past")}
else if(presentHour ==1) {
    $('#1').addClass("present")}
else { $("#1").addClass("future")}

if(presentHour > 14){
    $("#2").addClass("past")}
else if(presentHour ==2) {
    $('#2').addClass("present")}
else { $("#2").addClass("future")}

if(presentHour > 15){
    $("#3").addClass("past")}
else if(presentHour ==3) {
    $('#3').addClass("present")}
else { $("#3").addClass("future")}

if(presentHour > 16){
    $("#4").addClass("past")}
else if(presentHour ==4) {
    $('#4').addClass("present")}
else { $("#4").addClass("future")}

if(presentHour > 17){
    $("#5").addClass("past")}
else if(presentHour ==5) {
    $('#5').addClass("present")}
else { $("#5").addClass("future")}



$("button").click(function(event){
 event.preventDefault;
   
var taskValue = $(this).siblings(".description").val()
console.log(taskValue)

var time = $(this).parent.attr("#9");
console.log(time)
})