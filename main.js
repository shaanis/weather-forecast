const displayWeather =async()=>{
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        
        
    };
    
    nocity.innerHTML = "";
    const input = city.value
    if(input){
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=59fe6f8350cda8bdb8b5bec4e8abbcd5`)
        if(response.status==200){
            const weatherDetail = await response.json()
            console.log(weatherDetail);
                result.innerHTML=`
                <div class="d-flex justify-content-center">
                  <div class="imgDiv">
                      <img class=" " src="./images/weather.jpg" alt="">
                  </div>
                  <div class="temp">
                      <div id ="wicon">
                      
                      </div>
                      <p class="text mt-3 text-light">${weatherDetail.main.temp}<span>°F</span></p>
                      <p class="text text-light">${weatherDetail.weather[0].main}</p>
                      <p class="place-text text-light">${weatherDetail.name},${weatherDetail.sys.country}</p>
                  </div>
              </div>
              <div class="d-flex justify-content-center mt-5">
               <div class="temp temp1">
                      <span class="  text-light date">${new Date(weatherDetail.dt * 1000).toLocaleString('en-US', options)}</span>
                      <p class=" text-light mt-2">feels like ${weatherDetail.main.feels_like}°</p>
                      <p class=" text-light">wind ${weatherDetail.wind.speed}kmph</p>
                      <p class=" text-light">humidity ${weatherDetail.main.humidity}kmph</p>
                      <p class=" text-light">pressure ${weatherDetail.main.pressure}kmph</p>
                  </div>
                  <div class="imgDiv">
                      <img class=" " src="./images/mountain.jpg" alt="">
                  </div>
                </div>  
              `
              if(weatherDetail.weather[0].main=="Clouds"){
                wicon.innerHTML=`<img style="width: 30px;" src="./images/cloudy.png" alt="">`
              }else if(weatherDetail.weather[0].main=="Clear"){
                  wicon.innerHTML=`<img style="width: 30px;" src="./images/sun.png" alt="">`
              }else if(weatherDetail.weather[0].main=="Rain"){
                wicon.innerHTML=`<img style="width: 30px;" src="./images/rainy-day.png" alt="">`
              }else if(weatherDetail.weather[0].main=="Mist"){
                wicon.innerHTML=`<img style="width: 30px;" src="./images/mist.png" alt="">`
              }
            
            
        }else{
           nocity.innerHTML="please Enter a valid city"
        }
    }catch(e){
        console.log(e);
        
    }
    
    }else{
        nocity.innerHTML="please Enter a  city"
    }
  
  
}