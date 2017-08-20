$(document).ready(function(){
    $('#getWeather').click(function(e){
        e.preventDefault();
//        var weatherAPI = "https://weathers.co/api.php?city=charlotte";
//        var data = {
//            "location"    : "Charlotte",
//            "temperature" : "28",
//            "skytext"     : "Scattered clouds"
//        };
        
        
            
        $.getJSON('https://weathers.co/api.php?city=charlotte', function(data){
            if(data == "ok") {
              $('#weatherResponse').html("<p>" + data['location'] +  "current temperature is: " + data['temperature'] + " and their current sky condition is " + data['skytext'] + "</p>");
                } // if
            });          
        
    });// click event
});// document.ready

//    $('#temperature').html(temperature);
//});

//{
//   "apiVersion":"1.0",
//   "data":{
//      "location":"New York, NY",
//      "temperature":"39",
//      "skytext":"Clear",
//      "humidity":"55",
//      "wind":"0 mph",
//      "date":"2012-12-12",
//      "day":"Wednesday"
//   }
//}
//	

////$(function(){
//  $('#followbtn').on('click', function(e){
//    e.preventDefault();
//    $('#followbtn').fadeOut(300);
//
//    $.ajax({
//      url: 'php/ajax-follow.php',
//      type: 'post',
//      data: {'action': 'follow', 'userid': '11239528343'},
//      success: function(data, status) {
//        if(data == "ok") {
//          $('#followbtncontainer').html('<p><em>Following!</em></p>');
//          var numfollowers = parseInt($('#followercnt').html()) + 1;
//          $('#followercnt').html(numfollowers);
//        }
//      },
//      error: function(xhr, desc, err) {
//        console.log(xhr);
//        console.log("Details: " + desc + "\nError:" + err);
//      }
//    }); // end ajax call
//  });