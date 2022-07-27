fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.107883&lon=17.038538&appid=6e8cafa242a6b13d93489c5311e00a79')
    .then(response => response.json())
    .then(json => console.log(json))




async function weather2(lat, lon, API_key) {

    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_key+'&units=metric';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const weather2 = await response.json();
    console.log(weather2['main'])
    const icon_code = weather2['weather']['0']['icon']
let city_name = weather2['name']
let feels_like = weather2['main']['feels_like']
let temp_min = weather2['main']['temp_min']
let temp_max = weather2['main']['temp_max']
let sunrise = weather2['sys']['sunrise']
let sunset = weather2['sys']['sunset']

document.getElementById("weather_city_name").innerText = city_name;
document.getElementById("weather_info").innerText = 'Feels like ' + feels_like + ' Min: ' + temp_min + ' Max: '+ temp_max

const img = document.querySelector("img"); 
img.src = 'http://openweathermap.org/img/wn/'+icon_code+'@2x.png';

}

weather2('51.107883', '17.03853', '6e8cafa242a6b13d93489c5311e00a79')

