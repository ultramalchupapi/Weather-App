const searchBar = document.querySelector('.search-bar-input')
let temp = document.querySelector('.temperature');
let city = document.querySelector('.city');
let windSpeed = document.querySelector('.wind-speed');
let weatherResult = document.querySelector('.weather-results')
let weatherIcon = document.querySelector('.weather-icon');
let humidity = document.querySelector('.humidity');
let apiKey = '2fbe0e568c7032c2ecafafbd978c951c',
apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=';

async function getWeather(cityName) {
    let data = await fetch(apiUrl + apiKey + '&q=' + cityName);
    let response = await data.json();

    try{
        if(response.weather[0].main == 'Clouds'){
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`
    }else if(response.weather[0].main == 'Rain'){
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`
    }else if(response.weather[0].main == 'Clear'){
        weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }else if(response.weather[0].main == 'Drizzle'){
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`
    }else if(response.weather[0].main == 'Mist'){
        weatherIcon.innerHTML = `<i class="fa-solid fa-smog"></i>`
    }
        
    city.innerHTML = response.name;
    humidity.innerHTML = response.main.humidity + '%';
    temp.innerHTML = Math.round(response.main.temp) + '°C';
    windSpeed.innerHTML = response.wind.speed + 'km/h';

    searchBar.value = '';
    weatherResult.style.display = 'block';
    noSearchDisplay.style.display = 'none';
    console.log(response);
    }catch(error){
        alert('invalid city credential')
    }

}

document.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        getWeather(searchBar.value);
    }
})



