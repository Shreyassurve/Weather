// const url = 'https://open-weather13.p.rapidapi.com/city/Mumbai/IN';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'cb75b6fa33940209f5ca9f012d71f0cc',
// 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// 	}
// };



// //  async function GetData() {
// //     const data  = await fetch(url, options);
// //     const Response = await data.json();
// //     console.log(Response);
// //     }


// //     GetData();

// async function getWeather() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }


// getWeather();





// app.js

async function getWeather() {
    const apiKey = 'cb75b6fa33940209f5ca9f012d71f0cc'; // Replace with your OpenWeather API key
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p class="text-danger">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, sys, main, weather, wind } = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    const weatherHTML = `
        <img src="${icon}" alt="Weather icon">
        <h3>${name}, ${sys.country}</h3>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Feels Like: ${main.feels_like}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHTML;
}
