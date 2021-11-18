var timeDisplayID = $("#time-display");


function displayTime(){
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayID.text(currentTime);
    console.log(currentTime);
}
setInterval(displayTime, 1000);