$(document).ready(function(){
    $('#getWeather').click(function(e){
        e.preventDefault();
                    
        $.getJSON('http://weathers.co/api.php?city=charlotte', function(rsp){
            console.log(rsp);
            
             // Set the value for Fahrenheit
            var celsius = rsp.data['temperature'];
            var fahrenheit = Math.round(celsius * 9 / 5 + 32);
            
            var forecast = $('<p>');
            forecast.html(rsp.data['location'] +  "'s current temperature is " + fahrenheit + "&#8457; and currently " + rsp.data['skytext'] +".");
            
          $('#weatherResponse').append(forecast);
        
        });// getJSON          
        
    });// click event
});// document.ready
