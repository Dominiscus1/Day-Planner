var timeDisplayID = $("#time-display");
var currentDate;
var currentTime;
var temp;

function displayTime() {
  currentDate = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayID.text(currentDate);
}
setInterval(displayTime, 1000);

function clickBtn() {
  var btn = $(this);
  var blockEl = btn.parent();
  var inputEl = blockEl.find("textarea");
  var inputValue = inputEl[0].value;
  var hour = blockEl.attr("id");
  localStorage.setItem(hour, inputValue);
}
var currentHour = moment().format("H")
console.log(currentHour);
for (var hour = 9; hour < 18; hour++) {
  var blockEl = $("#hour-" + hour);
  var inputEl = blockEl.find("textarea");
  if(hour == currentHour) {
    console.log("Present Time", currentHour);
    inputEl[0].style.backgroundColor = "lightblue";
  }
  else if(hour < currentHour) {
    console.log("Past Time");
    inputEl[0].style.backgroundColor = "lightcoral";
  }
  else{
    console.log("Future Time");
    inputEl[0].style.backgroundColor = "lightgreen";
  }
  inputEl[0].value = localStorage.getItem("hour-" + hour);
}

$(".saveBtn").on("click", clickBtn);
