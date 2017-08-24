$(document).ready(function(){
    $('#getWeather').click(function(e){
        e.preventDefault();
        var city = $('#city').val();
        var URL = "http://weathers.co/api.php?city=" + city;
                    
        $.getJSON(URL, function(rsp){
            console.log(rsp);
            
             // Set the value for Fahrenheit
            var celsius = rsp.data['temperature'];
            var fahrenheit = Math.round(celsius * 9 / 5 + 32);
            
            var forecast = $('<p>');
            forecast.html(rsp.data['location'] +  "'s current temperature is " + fahrenheit + "&#8457; with " + rsp.data['skytext'] +".");
            
          $('#weatherResponse').append(forecast);
        
        });// getJSON          
        
    });// click event
});// document.ready
