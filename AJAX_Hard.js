$(document).ready(function(){
    
    //longitude and latitude
    $('#submitEvent').click(function(e){
        e.preventDefault();
        var longitude = $('#longitude').val();
        var latitude = $('#latitude').val();
        console.log(longitude, latitude);
        var URL = "http://api.open-notify.org/iss-pass.json?lat=" + latitude + "&lon=" + longitude + "&callback=?";
       
        $.getJSON(URL, function(data) {
            var riseTime = data['risetime'];
            var duration = data['duration']
                
            data['response'].forEach(function(d){
                $('#dateTimes').append('<li>' + d['risetime'] + '  on ' + d['duration'] + '</li>');
            });// forEach
        });// getJSON

    }); //submit Event
    
    //Bonus Geolocator
    $('#geolocator').click(function (e) {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                console.log(position.coords.latitude);
                $('#longitude').val(position.coords.longitude);
                $('#latitude').val(position.coords.latitude);
            });

            console.log();
        } else {
            $('#longAndLat').html("Geolocation is not supported by this browser.");
        } // if/else
        
        function showPosition(position){
           $('#longAndLat').html("Longitude:" + position.coords.longitude + 
            "<br>Latitude: " + position.coords.latitude); 
        };// position
    }); //getLocation
});// document.ready    