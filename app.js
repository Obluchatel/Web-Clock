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
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    var element = document.getElementById("myprogressBar2");   
    var width = 1;
      if (width >= 100) {
        element.style.width = 0 + '%';
        update_bar();
      } else {
        var percent = 100/60
        width = width+(second*percent); 
        element.style.width = (second*percent) + '%'; 
      }
      var element = document.getElementById("myprogressBar");   
      var width = 1;
        if (width >= 100) {
          element.style.width = 0 + '%';
          update_bar();
        } else {
          var percent = 100/60
          width = width+(minute*percent); 
          element.style.width = (minute*percent) + '%'; 
        }
        var element = document.getElementById("myprogressBar3");   
        var width = 1;
          if (width >= 100) {
            element.style.width = 0 + '%';
            update_bar();
          } else {
            var percent = 100/24
            width = width+(hour*percent); 
            element.style.width = (hour*percent) + '%'; 
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
    const myprogressBar2 = document.querySelector("#myprogressBar2")
    myprogressBar2.classList.toggle("dark")
    const myprogressBar3 = document.querySelector("#myprogressBar3")
    myprogressBar3.classList.toggle("dark")
}

async function weather2(lat, lon, API_key) {

  const requestURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_key+'&units=metric';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const weather2 = await response.json();
  const icon_code = weather2['weather']['0']['icon']
  let city_name = weather2['name']
  let feels_like = weather2['main']['feels_like']
  let temp_min = weather2['main']['temp_min']
  let temp_max = weather2['main']['temp_max']
  let sunrise =  weather2['sys']['sunrise']
  let sunset = weather2['sys']['sunset']
  function local_time(timestamp){
    dateObj = new Date(timestamp * 1000)
    utcString = dateObj.toString()
    time = utcString.slice(-48, -43);
    return time
  }


document.getElementById("weather_city_name").innerText = city_name;
document.getElementById("weather_info").innerText = 'Feels like ' + feels_like + ' Min ' + temp_min + ' Max '+ temp_max;
document.getElementById("sunset_sunrise").innerText = "Sunrise " + local_time(sunrise) + " " + "Sunset " +  local_time(sunset) 

const img = document.querySelector("img"); 
img.src = 'http://openweathermap.org/img/wn/'+icon_code+'@2x.png';

}

weather2('51.107883', '17.03853', '6e8cafa242a6b13d93489c5311e00a79')


// function getUserName() {
//   var nameField = document.getElementById('nameField').value;
//   var result = document.getElementById('result');
  
//   if (nameField.length < 3) {
//       result.textContent = 'Username must contain at least 3 characters';
//       //alert('Username must contain at least 3 characters');
//   } else {
//       result.textContent = 'Your username is: ' + nameField;
//       //alert(nameField);
//   }
//   }
//   var subButton = document.getElementById('subButton');
//   subButton.addEventListener('click', getUserName, false); 


 


