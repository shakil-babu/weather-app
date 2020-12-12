//Elements
let icon = document.getElementById('weatherImg');
let name = document.getElementById('cityName');
let temp = document.getElementById('temp');
let lead = document.getElementById('lead');
let searchBtn = document.getElementById('search-button');
let cityInput = document.getElementById('cityInput');

// key
let apiKey = '182ef6cf8fd2aa7ea2d2e8b12dab0a2c';

//work with search btn
searchBtn.addEventListener('click',function(){
    getData(cityInput.value,apiKey);
})

// getData implementation
function getData(city,key){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}` )
    .then(res => res.json())
    .then(data => showData(data))
}

// showData implementation
function showData(data){

    let cvalue = cityInput.value;
    let emty = `<h2 class='text-danger'>Location is emty!</h2>`;
    let notfound = `<h2 class='text-danger'>Location Not Found!</h2>`;
    name.innerHTML= cvalue == '' ?emty: !data.name? notfound :  data.name;
    temp.innerText = cvalue == '' ?'0': !data.main.temp? '0' :data.main.temp;
    lead.innerText= cvalue == '' ?"None": !data.weather[0].main?'None': data.weather[0].main;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    cityInput.value = '';
}