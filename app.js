    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    var element = document.getElementById("myprogressBar");   
    var width = 1;
      if (width >= 100) {
        element.style.width = 0 + '%';
        update_bar();
      } else {
        var percent = 100/60
        width = width+(second*percent); 
        element.style.width = (second*percent) + '%'; 
      }
    setTimeout(Time, 1000);

    // adding the date to clock
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    var mounth = date.getUTCMonth();
    if (mounth <= 11) {
        if (mounth < 10) {
        mounth = mounth+1;
        mounth = ("0"+mounth)
    }
    }
     else {
        mounth;
    }
    if (day < 10 ) {
        day = ("0" + day)
    }
    document.getElementById("date").innerText = day +"."+ mounth + "." + year;
    // setTimeout(dayoftheweek, 1000);
   }


    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10

   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();
function darkMode() {
    const mode = document.querySelector("body");
    mode.classList.toggle("dark");
    const div = document.querySelector("#digital-clock");
    div.classList.toggle("dark");
    const button = document.querySelector("#button")
    button.classList.toggle("dark")
    const date = document.querySelector("#date")
    date.classList.toggle("dark")
    const myprogressBar = document.querySelector("#myprogressBar")
    myprogressBar.classList.toggle("dark")
}


function update_bar() {
    // var dateoftheday = new Date();
    
    }

 


