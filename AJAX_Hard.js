$(document).ready(function(){
    $('#submitEvent').click(function(e){
        e.preventDefault();
        var longitude = $('#longitude').val();
        var latitude = $('#latitude').val();
        console.log(longitude, latitude);
        var URL = "http://api.open-notify.org/iss-pass.json?" + latitude + "=LAT&" + longitude + "=LON";
        
        $.getJSON(URL, function(data) {
            var passes = data['passes'];
            var date = data['datetime'];
                
            data['passes'].forEach(function(d){
                $('#dateTimes').append('<li>' + d['passes'] + '  on ' + d['date'] + '</li>');
            });// forEach
        });// getJSON

//http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON
        
        
// "request": {
//    "latitude": LATITUE,
//    "longitude": LONGITUDE, 
//    "altitude": ALTITUDE,
//    "passes": NUMBER_OF_PASSES,
//    "datetime": REQUEST_TIMESTAMP
//  },
    

    }); //submit Event
});// document.ready    