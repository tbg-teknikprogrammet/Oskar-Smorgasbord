$('.parallax-window').parallax({imageSrc: 'assets/images/kontakt.jpg'});

var video = document.getElementById("video")
var ifrm = document.getElementsByTagName("iframe")[0];

document.getElementById("video1").addEventListener("click", function(){
    document.getElementById('ifrm').src = "https://www.youtube.com/embed/RVdZs8Vh0O0";
    ifrm.style.visibility = "visible";
});
document.getElementById("video2").addEventListener("click", function(){
    document.getElementById('ifrm').src = "https://www.youtube.com/embed/HCdn0zg6NDM";
    ifrm.style.visibility = "visible";
});
document.getElementById("video3").addEventListener("click", function(){
    document.getElementById('ifrm').src = "https://www.youtube.com/embed/yF3JWJksP9I";
    ifrm.style.visibility = "visible";
});
document.getElementById("video4").addEventListener("click", function(){
    document.getElementById('ifrm').src = "https://www.youtube.com/embed/BJhF0L7pfo8";
    ifrm.style.visibility = "visible";
});
document.getElementById("hidev").addEventListener("click", function(){
    ifrm.style.visibility = "hidden";
});
$(document).mousemove(function(e){
    $("#image").stop().animate({left:e.pageX, top:e.pageY});
});

var r=255,g=0,b=0;

setInterval(function(){
  if(r > 0 && b == 0){
    r--;
    g++;
  }
  if(g > 0 && r == 0){
    g--;
    b++;
  }
  if(b > 0 && g == 0){
    r++;
    b--;
  }
  $("#color").text("rgb("+r+","+g+","+b+")");
  $("#color").css("color","rgb("+r+","+g+","+b+")");
},100);

var h1 = document.getElementById('h1'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

