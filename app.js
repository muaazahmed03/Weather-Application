let API_KEY = "f7c1aef9bf77a05bcec394276cc2652d";

let inputData = document.getElementById('inputField');
let showWeather = document.getElementById('showWeather')

let searchData = async ()=>{
    showWeather.innerHTML = `<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

   let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputData.value}&appid=${API_KEY}&units=metric`

   let fetchData = await fetch(API_URL);
   let respone = await fetchData.json();

   console.log(respone);

   return showData(respone);
};

let showData = (data)=>{
    showWeather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <h1 class="text-success">Country: ${data.sys.country}</h1>
    <h2 class="text-success">Weather: ${data.weather[0].main}</h2>
    <h3 class="text-success">Temp: ${data.main.temp} C</h3>
        <h3 class="text-success">Wind Speed: ${data.wind.speed}</h3>
        <h3 class="text-success">Humidity: ${data.main.humidity}</h3>`
}