document.getElementById('searchForm').addEventListener('submit', (e)=>{
  const city= document.getElementById("searchInput").value;
  console.log(city)
  // console.log(e.value)
  getWeatherApi(city);
  e.preventDefault();
})


function getWeatherApi(city){
    // this.apikey=d71be756535b836342b5fa5e644f8f8e;
    this.city=city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`)
    .then(response =>{
        if (response.ok) {
            return response.json();
          } else {
            throw new Error("NETWORK RESPONSE ERROR");
          }
    })
    .then(data => {
      console.log(data)
      displayWeather(data);
    })
    .catch(error => {console.log(error)});
}


function displayWeather(data){
  const searchResult = document.getElementById("searchResult");
  //get city name from API & display
  const cityName = document.getElementById("cityName");
  cityName.innerHTML=data.name;

  //get temperature from API and display
  const temperature = document.getElementById("temperature");
  temperature.innerHTML=`temperature: ${data.main.temp}°C`;

  //get and display humidity
  const humidity = document.getElementById("humidity");
  humidity.innerHTML=`humidity: ${data.main.humidity}%`

  //get and display wind
  const wind = document.getElementById("wind");
  wind.innerHTML = `Wind: ${data.windSpeed} km/h`;

}



