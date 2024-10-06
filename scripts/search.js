function searchCity() {
  let searchedCity = document.getElementById("search-area").value;
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchedCity}&days=3`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1dd1ed767cmshefe600832f4e830p12a40cjsn3e1ebc332c3a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

  fetch(url, options)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    // TODAYS WEATHER
    const location = document.querySelector(".current-city");
    location.innerHTML = `Current location's weather - ${res.location.name}`;

    const currentDate = document.querySelector(".current-date");
    date = convertTime(res.location.localtime);
    currentDate.innerHTML = `<b>Date:</b> <i>${date}</i>`;

    const icon = document.querySelector(".icon");
    icon.innerHTML = `<img src="${res.current.condition.icon}">`;

    const currentCondition = document.querySelector(".current-condition");
    currentCondition.innerHTML = `<b>Condition:</b> <i>${res.current.condition.text}</i>`;

    const currentTemperature = document.querySelector(".current-temperature");
    currentTemperature.innerHTML = `<b>Temperature: </b><i>${res.current.temp_c}°C</i>`;

    const currentHumidity = document.querySelector(".current-humidity");
    currentHumidity.innerHTML = `<b>Humidity: </b><i>${res.current.humidity}%</i>`;

    const lastUpdated = document.querySelector(".last-updated");
    lastUpdated.innerHTML = `<b>Last updated:</b> <i>${res.current.last_updated}</i>`;

    // THE NEXT THREE DAY'S WEATHER
    // DAY ONE
    const todayDate = document.querySelector(".todays-date");
    todayDate.innerHTML = `<b>Date:</b> <i>${date}</i>`;

    const todayIcon = document.querySelector(".icon2");
    todayIcon.innerHTML = `<img src="${res.current.condition.icon}">`;

    const todayCondition = document.querySelector(".todays-condition");
    todayCondition.innerHTML = `<b>Condition:</b> <i>${res.current.condition.text}</i>`;

    const todayTemperature = document.querySelector(".todays-temperature");
    todayTemperature.innerHTML = `<b>Temperature: </b><i>${res.current.temp_c}°C</i>`;

    const todayHumidity = document.querySelector(".todays-humidity");
    todayHumidity.innerHTML = `<b>Humidity: </b><i>${res.current.humidity}%</i>`;

    // DAY TWO
    const tmrwDate = document.querySelector(".tomorrows-date");
    date2 = convertTime(res.forecast.forecastday[1].date);
    tmrwDate.innerHTML = `<b>Date:</b> <i>${date2}</i>`;

    const tmrwIcon = document.querySelector(".icon3");
    tmrwIcon.innerHTML = `<img src="${res.forecast.forecastday[1].day.condition.icon}">`;

    const tmrwCondition = document.querySelector(".tomorrows-condition");
    tmrwCondition.innerHTML = `<b>Condition:</b> <i>${res.forecast.forecastday[1].day.condition.text}</i>`;

    const tmrwAvgTemperature = document.querySelector(".tomorrows-avg-temperature");
    tmrwAvgTemperature.innerHTML = `<b>Avg Temperature: </b><i>${res.forecast.forecastday[1].day.avgtemp_c}°C</i>`;

    const tmrwHumidity = document.querySelector(".tomorrows-humidity");
    tmrwHumidity.innerHTML = `<b>Avg Humidity: </b><i>${res.forecast.forecastday[1].day.avghumidity}%</i>`;

    // DAY THREE
    const ovrmrwDate = document.querySelector(".overmorrows-date");
    date3 = convertTime(res.forecast.forecastday[2].date);
    ovrmrwDate.innerHTML = `<b>Date:</b> <i>${date3}</i>`;

    const ovrmrwIcon = document.querySelector(".icon4");
    ovrmrwIcon.innerHTML = `<img src="${res.forecast.forecastday[2].day.condition.icon}">`;

    const ovrmrwCondition = document.querySelector(".overmorrows-condition");
    ovrmrwCondition.innerHTML = `<b>Condition:</b> <i>${res.forecast.forecastday[2].day.condition.text}</i>`;

    const ovrmrwAvgTemperature = document.querySelector(".overmorrows-temperature");
    ovrmrwAvgTemperature.innerHTML = `<b>Avg Temperature: </b><i>${res.forecast.forecastday[2].day.avgtemp_c}°C</i>`;

    const ovrmrqAvgHumidity = document.querySelector(".overmorrows-humidity");
    ovrmrqAvgHumidity.innerHTML = `<b>Avg Humidity: </b><i>${res.forecast.forecastday[2].day.avghumidity}%</i>`;

    // HOURLY FORECAST
    // TODAY HOURLY FORECAST
    const forecasts = document.querySelector(".forecasts")
    function todayHourlyForecast() {
      forecasts.innerHTML = ""
      for (
        let index = 0;
        index < res.forecast.forecastday[0].hour.length;
        index++
      ) {
        const hourTime = res.forecast.forecastday[0].hour[index].time.slice(11,16);
        if (index <= 8) {
          continue;
        } else if (index > 17) {
          break;
        } else {
          forecasts.innerHTML += `<div class="hourly-cards"><span><b>Time:</b> ${hourTime}</span> <br>
        <span><img src="${res.forecast.forecastday[0].hour[index].condition.icon}"></span> <br>
        <span><b>Condition:</b> ${res.forecast.forecastday[0].hour[index].condition.text}</span> <br>
        <span><b>Temperature:</b> ${res.forecast.forecastday[0].hour[index].temp_c}°C</span> <br>
        <span><b>Humidity:</b> ${res.forecast.forecastday[0].hour[index].humidity}%</span></div>`;
        }
      }
    }

    // TOMORROW HOURLY FORECAST
    function tomorrowHourlyForecast() {
      forecasts.innerHTML = ""
      for (
        let index = 0;
        index < res.forecast.forecastday[1].hour.length;
        index++
      ) {
        const hourTime = res.forecast.forecastday[1].hour[index].time.slice(11,16);
        if (index <= 8) {
          continue;
        } else if (index > 17) {
          break;
        } else {
          forecasts.innerHTML += `<div class="hourly-cards"><span><b>Time:</b> ${hourTime}</span> <br>
          <span><img src="${res.forecast.forecastday[1].hour[index].condition.icon}"></span> <br>
          <span><b>Condition:</b> ${res.forecast.forecastday[1].hour[index].condition.text}</span> <br>
          <span><b>Temperature:</b> ${res.forecast.forecastday[1].hour[index].temp_c}°C</span> <br>
          <span><b>Humidity:</b> ${res.forecast.forecastday[1].hour[index].humidity}%</span></div>`;
        }
      }
    }

    // OVERMORROW HOURLY FORECAST
    function overmorrowHourlyForecast() {
      const ovrmrHourlyForecast = document.querySelector(".overmorrow-hourly-forecast");
      forecasts.innerHTML = ""
      for (
        let index = 0;
        index < res.forecast.forecastday[2].hour.length;
        index++
      ) {
        const hourTime = res.forecast.forecastday[2].hour[index].time.slice(11,16);
        if (index <= 8) {
          continue;
        } else if (index > 17) {
          break;
        } else {
          forecasts.innerHTML += `<div class="hourly-cards"><span><b>Time:</b> ${hourTime}</span> <br>
            <span><img src="${res.forecast.forecastday[2].hour[index].condition.icon}"></span> <br>
            <span><b>Condition:</b> ${res.forecast.forecastday[2].hour[index].condition.text}</span> <br>
            <span><b>Temperature:</b> ${res.forecast.forecastday[2].hour[index].temp_c}°C</span> <br>
            <span><b>Humidity:</b> ${res.forecast.forecastday[2].hour[index].humidity}%</span></div>`;
        }
      }
    }

    // BUTTON FOR TODAY'S HOURLY. IT SHOWS UP WHE  YOU CLICK
    const btnTodayHourlyForecast = document.querySelector(".today-hourly");
    btnTodayHourlyForecast.onclick= () => {todayHourlyForecast()}

    // BUTTON FOR TOMORROW'S HOURLY. IT SHOWS UP WHE  YOU CLICK
    const btnTomorrowHourlyForecast = document.querySelector(".tomorrow-hourly");
    btnTomorrowHourlyForecast.onclick= () => {tomorrowHourlyForecast()}


    // BUTTON FOR OVERMORROW'S HOURLY. IT SHOWS UP WHE  YOU CLICK
    const btnOvermorrowHourlyForecast = document.querySelector(".overmorrow-hourly");
    btnOvermorrowHourlyForecast.onclick= () => {overmorrowHourlyForecast()}

    const unhide = document.querySelectorAll(".hide")
    unhide.forEach(element => {
      element.classList.remove("hide");
    });
  });

  // Filter to local time in word format
  function convertTime(date) {
    // variables
    let day = date.slice(8, 10);
    let month = date.slice(5, 7);
    const months = [
      "January",
      "February",
      "March",
      "April",  
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    month = months[month - 1];
    let year = date.slice(0, 4);
    let weekday = new Date(date).getDay();
    weekday = isNaN(weekday)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][weekday];
    return `${weekday}, ${day} ${month} ${year}.`;
  }
}

const btnSearch = document.getElementById("btnSearch")
const searchBar = document.getElementById("search-area")

btnSearch.addEventListener("click", searchCity);
searchBar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchCity();
  }
});