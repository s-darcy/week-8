$(document).ready(function(){
    $('#submitEvent').click(function(e){
        e.preventDefault();
        var longitude = $('#longitude').val();
        var latitude = $('#latitude').val();
        console.log(longitude, latitude);
        var URL = "http://api.open-notify.org/iss-pass.json?" + latitude + "=LAT&" + longitude + "=LON&jsoncallback=?";
        
        $.getJSON(URL, function(data) {
            var riseTime = data['riseTime'];
            var duration = data['duration']
                
            data['response'].forEach(function(d){
                $('#dateTimes').append('<li>' + d['riseTime'] + '  on ' + d['duration'] + '</li>');
            });// forEach
        });// getJSON

    }); //submit Event
    
    $('#geolocator').click(function geoLocator() {
        if (navigator.geoLocator) {
            navigator.geoLocator.getCurrentPosition(showPosition);
            function showPosition(position){
               longAndLat.html("Longitude:" + position.coords.longitude + 
                "<br>Latitude: " + position.coords.latitude); 
            };// position
        } else {
            longAndLat.html("Geolocation is not supported by this browser.");
        } // if/else
    }); //getLocator

    
});// document.ready    