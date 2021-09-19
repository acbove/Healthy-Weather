let btn = document.getElementById('fo-bt');

btn.addEventListener('click',() =>{
    // get desired aq value and store to input
    let input = document.getElementById('desiredaq').value;
    console.log(input);

    // check location (if on continue)
    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(async function(position){
            console.log(position);

            // data in JSON from openweather
            const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=144447a6a9e444b832014f275520d187`);
            const data = await response.json();
            console.log(data);
            
            //get particulate matter from JSON
            const value = data.list[0].components.pm2_5;
            console.log(value);

            const pmOutput = document.getElementById("pmValue");
            localStorage.setItem('pmValue', value);

            localStorage.setItem('inputValue', input);

    
            
            // good air quality
            if(value < input){
                document.location.href = "GoodAir.html";
            }

            // bad air quality
            else{
                document.location.href = "BadAir.html";
            }

        }); 
          
    else
        console.log("Geolocation is not supported on your web browser");
});

