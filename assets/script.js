// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtnEl = $('#save');
var textAreaEL = $('#scheduleData');

// var saveButton = document.getElementById("save-button"); 
// saveButton.addEventListener("click", function() { 
//   saveButton.textContent = "Saved"; 
//   saveButton.classList.add("saved"); 
// }); 

var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var newDate = mm + '' + dd + '' + yyyy;
var p = document.getElementById('currentDate');
p.innerHTML = date;

$('#save').on('click', function()  {
preventDefault
  // var scheduleData = Input.value;
  var schedule = $('#scheduleData').text();
  var scheduleData = localStorage.setItem('schedule', text);
  var parsedSchedule = JSON.parse(schedule) || [];
  var text = JSON.stringify(parsedSchedule);

  parsedSchedule.push(scheduleData);

  localStorage.getItem('schedule', text);

  if (event.target.matches(schedule)) {
    console.log('Saved');


    console.log($(this).data('scheduleData'));
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    updateHTML
  }
});
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
}
timeblock()
$('.saveBtn').on('click', function(){
  var schedule = $(this).prev().val();
  console.log(schedule);
});