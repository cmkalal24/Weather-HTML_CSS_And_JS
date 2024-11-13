//We use RapidApi.com to fetch the worldwide weather
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5981add186msh58ffe674cae7c52p1d4829jsnd7558b570a34',
		'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
	}
};

const getWeather = (cy)=>{

    cityName.innerHTML = cy
    fetch('https://cities-temperature.p.rapidapi.com/weather/v1?city=' + cy, options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        
        city.innerHTML  = response.city    
        city2.innerHTML  = response.city   
        temperature.innerHTML  = response.temperature       
        temperatureC.innerHTML  = response.temperatureC    
        temperatureC2.innerHTML  = response.temperatureC  
        temperatureF.innerHTML  = response.temperatureF  
        temperatureF2.innerHTML  = response.temperatureF  
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{

    e.preventDefault()
    getWeather(cy.value)
})


getWeather("Delhi")