var min = 0;
var sec = 0;
var msec = 0;
var minCount = document.getElementById ("min");
var secCount = document.getElementById ("sec");
var msecCount = document.getElementById ("msec");
var interval;
document.getElementById("para").innerHTML = "start";


function timer()
{
    msec++;
    msecCount.innerHTML  = msec;

 if (msec >= 100) 
{
    sec++;
    secCount.innerHTML = sec;
    msec = 0;
}
else if (sec >= 60)
{
    min++;
    minCount.innerHTML = min;
    sec = 0;
}
}

function start() 
{
    interval = setInterval(timer,10);
    document.getElementById("startbtn").disabled = true;
    document.getElementById("para").innerHTML = "stop";
}

function stop() 
{
    clearInterval(interval);
    document.getElementById("startbtn").disabled = false;
    document.getElementById("para").innerHTML = "start";
}

function reset() 
{
    min = 0;
    sec = 0;
    msec = 0;
    minCount.innerHTML = min;
    secCount.innerHTML = sec;
    msecCount.innerHTML = msec;
    stop();
    document.getElementById("startbtn").disabled = false;
    document.getElementById("para").innerHTML = "start";
}
