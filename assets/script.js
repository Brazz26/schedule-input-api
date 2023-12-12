$(document).ready(function(){

//gets current date and time of opening session
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var newDate = mm + '' + dd + '' + yyyy;
var p = document.getElementById('currentDate');
p.innerHTML = date;

//click event for save button
$('.saveBtn').on('click', function ()  {
 
 var timeblock = $(this).parent().attr('id');
var note = $(this).siblings('.description').val();
console.log(timeblock,note)


  localStorage.setItem(timeblock,note);
    
});
//grabs value saved in local storage at 'hour-'
for(i = 9; i <= 18;  i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
};
// function to define timeblocks
function timeblock() {
  var currentHour = dayjs().hour();
  console.log(currentHour);
  for (i = 9; i < 18; i++) {
    var hourContainerEl = $('#hour-' + i);
    if (i > currentHour) {
      hourContainerEl.addClass('future')
    } else if (i < currentHour) {
      hourContainerEl.addClass('past')
    } else if (i === currentHour){
      hourContainerEl.addClass('present')
          }
  }
};

//function to change timeblocks based off past, future, and present
timeblock()
$('.saveBtn').on('click', function(){
  var schedule = $(this).prev().val();
  console.log(schedule);
});




})
