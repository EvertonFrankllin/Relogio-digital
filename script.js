/*
document.addEventListener('DOMContentLoaded' , ()=>{

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
      }
      
    if (minutes < 10) {
        minutes = "0" + minutes;
      }
      
    if (seconds < 10) {
        seconds = "0" + seconds;
      }
    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = timeString;
  }
  updateClock();
  setInterval(updateClock, 1000);

});
*/
document.addEventListener("DOMContentLoaded", function(){
const elementHours = document.getElementById('hours');
const elementMinute = document.getElementById('minutes');
const elementSecond = document.getElementById('seconds');

function newTime(){
const date = new Date;
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

elementHours.textContent = fixTime(hours);
elementMinute.textContent =fixTime( minutes);
elementSecond.textContent = fixTime(seconds);

}

function fixTime(time){
    if(time < 10){
        return "0" + time;
    }else{
        return time;
    }
    
}

    newTime();
    setInterval(newTime, 1000);
});













































