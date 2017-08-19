$(document).ready(function(){
   var numberOfSets, setLength, restLength;
    
    
    //retrieves and store input values
    $('#tabataTimer').submit(function(event){
        numberOfSets = parseInt($('#numberOfSets').val());
        setLength = parseInt($('#setLength').val());
        restLength = parseInt($('#restLength').val());
        event.preventDefault();
        console.log(numberOfSets);
        
    
    //converts current time into a digital clock
    var curClock = new Date().toTimeString();
//        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        
        
//4. Allow the user to start the timer once those questions have been answered.    
    //checks if all inputs are complete
    $('.startTimer').click(function(){
        if(!numberOfSets || !setLength || !restLength){
            $('#clock').html("Please fill out all fields.");
        }
    }); //if/else inputs checkers
    
    console.log(curClock);
    
        
//5. Allow the user to stop the timer at any time after it has started.
        $('.startTimer').click(function(){
               $(this).html("Rest Timer");
               $(this).removeClass("startTimer");
               $(this).addClass("restTimer");  
        });
        
        $('#stop').click(function(){
            clearInterval(timer);
            console.log(restClock());
            timer = null;
        });
    
//6. Visually count down each activity period and then each rest period.
    var timer = null, 
        interval = 1000,
        sec = 0;   
    $('.startTimer').click(function(){
        $(this).addClass("active");

        if (timer !== null) return;
            function clock (val) {return val > 9 ? val : "0" + val;}
            timer = setInterval(function(){
                $("#seconds").html(clock(++sec%60));
                $("#counter").html(clock(parseInt(sec/setLength, 10)));
            }, interval);
            console.log(sec);
//                if (sec === setLength){
//                    return clearInterval(clock);
//                        //call rest function to start it
//                } else {  
//                    clearInterval(clock);
//                }
    }); //start timer
        
    function restClock () {
        var restSec = 0;    
        function restClock (val) {return val > 9 ? val : "0" + val;}
        var restTimer = setInterval(function(){
            $("#restSeconds").html(restClock(++restSec%60));
            $("#restCounter").html(restClock(parseInt(restSec/restLength, 10)));
        }, 1000); 
        if(restSec === restLength){
            clearInterval(restTimer);
            timer = null;
        }
    };

   
    //Loop to decrement
//    function countDown () {
//        if($(window))
//    }    
             
        
//clearInterval(); this ends the timer        
        
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

//}
//
