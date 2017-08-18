$(document).ready(function(){
   var numberOfSets, setLength, restLength;
    
    
    //retrieves and store input values
    $('#tabataTimer').submit(function(event){
        numberOfSets = parseInt($('#numberOfSets').val());
        setLength = parseInt($('#setLength').val());
        restLength = parseInt($('#restLength').val());
        event.preventDefault();
        console.log(numberOfSets);
        
    
//    //converts current time into a digital clock
    var startClock = new Date().toTimeString();
//        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        
        
    
//4. Allow the user to start the timer once those questions have been answered.    
    //checks if all inputs are complete
    $('#startTimer').click(function(){
        if(!numberOfSets || !setLength || !restLength){
            $('#clock').html("Please fill out all fields.");
        } else {
            //inserts clock onto DOM
            $('#clock').html(startClock);
        }
    }); //if/else inputs checkers
    
    console.log(startClock);
    
//5. Allow the user to stop the timer at any time after it has started.
        $('#startTimer').click(function(){
           if($(this).html()=="Start Timer"){
              $(this).html("Stop Timer"); 
           } else {
               $(this).html("Start Timer");
           } 
        });
    
    console.log(setLength);

    }); //submit event
}); //document.ready 












//    function secondsConverter(d) {
//        d = Number(d);
//
//        var h = Math.floor(d / 3600);
//        var m = Math.floor(d % 3600 / 60);
//        var s = Math.floor(d % 3600 % 60);
//
//        return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
//     } //secondsConvter


//    secondsConverter(setLength);

//var endClock = now - startClock;





//    setInterval(function(){
//            var set = (parseInt($("#set").val(), 10))*1000;
//            console.log(set);
//        }, 20000);
//    });
//});


// Find the distance between now an the count down date
//var countDown = end - startClock;

//console.log($('#clock').html(seconds + "s"));
//
//
//function start() {
//    var startTimer = setInterval(function () {
//        set.val()++;
//    }, 1000);
//}
//
//start();