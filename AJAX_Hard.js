$(document).ready(function(){
    
    //longitude and latitude
    $('#submitEvent').click(function(e){
        e.preventDefault();
        var longitude = $('#longitude').val();
        var latitude = $('#latitude').val();
        var URL = "http://api.open-notify.org/iss-pass.json?lat=" + latitude + "&lon=" + longitude + "&callback=?";
       
        $.getJSON(URL, function(data) {
              
            data['response'].forEach(function(d){
                
                console.log(d['risetime']);
                var date = new Date(d['risetime']);
                var fullDateTime = date.toString("dddd, MMMM dd, yyyy h:mm:ss tt");
                
                var duration = d['duration'];
                var minutes = Math.floor(duration / 60);
                var seconds = duration - minutes * 60;
                var totalTime = (minutes +  " mins and " + seconds + " secs");
                
                $('#dateTimes').append('<li>' + fullDateTime + ' lasting for ' + totalTime + '</li>');
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