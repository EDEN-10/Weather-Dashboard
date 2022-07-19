let searchbutton = document.getElementById('search');
let cityInput = document.getElementById('cityname');
let selectedCity = document.getElementById('selectedCity');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let uvIndex = document.getElementById('uvIndex');

let day1Date = document.getElementById("day1-date");
let day1Temp = document.getElementById("day1-temp");
let day1Wind = document.getElementById("day1-wind");
let day1Humidity = document.getElementById("day1-humidity");
let day1UvIndex = document.getElementById("day1-uvIndex");

let day2Date = document.getElementById("day2-date");
let day2Temp = document.getElementById("day2-temp");
let day2Wind = document.getElementById("day2-wind");
let day2Humidity = document.getElementById("day2-humidity");
let day2UvIndex = document.getElementById("day2-uvIndex");

let day3Date = document.getElementById("day3-date");
let day3Temp = document.getElementById("day3-temp");
let day3Wind = document.getElementById("day3-wind");
let day3Humidity = document.getElementById("day3-humidity");
let day3UvIndex = document.getElementById("day3-uvIndex");

let day4Date = document.getElementById("day4-date");
let day4Temp = document.getElementById("day4-temp");
let day4Wind = document.getElementById("day4-wind");
let day4Humidity = document.getElementById("day4-humidity");
let day4UvIndex = document.getElementById("day4-uvIndex");

let day5Date = document.getElementById("day5-date");
let day5Temp = document.getElementById("day5-temp");
let day5Wind = document.getElementById("day5-wind");
let day5Humidity = document.getElementById("day5-humidity");
let day5UvIndex = document.getElementById("day5-uvIndex");

let cities=[]
if (localStorage.getItem("cities"))
{var cities2= JSON.parse(localStorage.getItem("cities"))
console.log(cities2) 
cities2.forEach(
    city =>{
        document.getElementById("searchHistory").innerHTML +=
        `<li>${city}</li>`
    }
)
}   

function weatherData() {
    let cityName = cityInput.value;
    cities = [...cities, cityName]
    localStorage.setItem("cities",JSON.stringify(cities))
   
    if (localStorage.getItem("cities"))
    {var cities1= JSON.parse(localStorage.getItem("cities")) 
    cities1.forEach(
        city =>{
            document.getElementById("searchHistory").innerHTML +=
            `<li>${city}</li>`
        }
    )
    }  
    
    let geoCodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=d967c17ba23c3dfea9d963ac03b57dd0`;

    fetch(geoCodingURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let lat = data[0].lat;
        let lon = data[0].lon

        let oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=d967c17ba23c3dfea9d963ac03b57dd0`

        fetch(oneCallURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        
            // render data
            selectedCity.textContent = cityName;
            temp.textContent = "Temp: " + data.current.temp + "°F"
            wind.textContent = "Wind: " + data.current.wind_speed + "MPH"
            humidity.textContent = "Humidity: " + data.current.humidity + "%"
            uvIndex.textContent = "UV Index: " + data.current.uvi


            // render fiveday forecast

            // day 1
            day1Date.textContent = moment(data.daily[1].dt * 1000).format("M/DD/YYYY");
            day1Temp.textContent = "Temp: " + data.daily[1].temp.day + "°F"
            day1Wind.textContent = "Wind " + data.daily[1].wind_speed + "MPH"
            day1Humidity.textContent = "Humidity " + data.daily[1].humidity + "%"
            day1UvIndex.textContent = "UV Index " + data.daily[1].uvi + ""



            day2Date.textContent = moment(data.daily[2].dt * 1000).format("M/DD/YYYY");
            day2Temp.textContent = "Temp: " + data.daily[2].temp.day + "°F"
            day2Wind.textContent = "Wind " + data.daily[2].wind_speed + "MPH"
            day2Humidity.textContent = "Humidity " + data.daily[2].humidity + "%"
            day2UvIndex.textContent = "UV Index " + data.daily[2].uvi + ""



            day3Date.textContent = moment(data.daily[3].dt * 1000).format("M/DD/YYYY");
            day3Temp.textContent = "Temp: " + data.daily[3].temp.day + "°F"
            day3Wind.textContent = "Wind " + data.daily[3].wind_speed + "MPH";
            day3Humidity.textContent = "Humidity " + data.daily[3].humidity + "%";
            day3UvIndex.textContent = "UV Index " + data.daily[3].uvi + ""

            day4Date.textContent = moment(data.daily[4].dt * 1000).format("M/DD/YYYY");
            day4Temp.textContent = "Temp: " + data.daily[4].temp.day + "°F"
            day4Wind.textContent = "Wind " + data.daily[4].wind_speed + "MPH";
            day4Humidity.textContent = "Humidity " + data.daily[4].humidity + "%"
            day4UvIndex.textContent = "UV Index " + data.daily[4].uvi + ""

            day5Date.textContent = moment(data.daily[5].dt * 1000).format("M/DD/YYYY");
            day5Temp.textContent = "Temp: " + data.daily[5].temp.day + "°F"
            day5Wind.textContent = "Wind " + data.daily[5].wind_speed + "MPH"
            day5Humidity.textContent = "Humidity " + data.daily[5].humidity + "%"
            day5UvIndex.textContent = "UV Index " + data.daily[5].uvi + ""

            



        
        });

    });



}
searchbutton.addEventListener("click", weatherData)
