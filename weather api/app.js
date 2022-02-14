function getWeatherApi(city){
    // this.apikey=d71be756535b836342b5fa5e644f8f8e;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`)
    .then(response =>{
        if (response.ok) {
            return response.json();
          } else {
            throw new Error("NETWORK RESPONSE ERROR");
          }
    })
    .then(data => {console.log(data)})
    .catch(error => {console.log(error)});
}

//const searchResult = document.getElementById("searchResult");
// const cityName = document.getElementById("cityName");
// const temperature = document.getElementById("temperature");
// const feelsLike = document.getElementById("feelsLike");
// const humidity = document.getElementById("humidity");
// const wind = document.getElementById("wind");

// cityName.textContent = `${weatherData.cityName}`;
// temperature.textContent = `${weatherData.temperature} °C`;
// feelsLike.textContent = `Fells like: ${weatherData.feelsLike} °C`;
// humidity.textContent = `Humidity: ${weatherData.humidity} %`;
// wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;



getWeatherApi('sarasota');

