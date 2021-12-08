var timeDisplayID = $("#time-display");
var currentTime

function displayTime(){
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayID.text(currentTime);
    console.log(currentTime);
}
setInterval(displayTime, 1000);

//if a segment is in past color it grey
//present color it green
//future blue
//time blocks 9-5 =9
function generateTimeBlock(){
    const timeBlock = ({timeBlockId}, {hour}, ) =>
    `<div id="time-block${timeBlockId}" class="row hour-segment">
    <div class="col-1 hour">${hourText}</div>
    <textarea name="text-area-block" id ="text-block0" class ="col-10 description"></textarea>
    <button class="col-1 saveBtn" 
    id="text-block0-save"><i class="far fa-save"></i></button>
    </div>`;
}