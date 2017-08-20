$(document).ready(function(){
   var numberOfSets, setLength, restLength;
    
    
    //retrieves and store input values
    $('#tabataTimer').submit(function(event){
        numberOfSets = parseInt($('#numberOfSets').val());
        setLength = parseInt($('#setLength').val());
        restLength = parseInt($('#restLength').val());
        event.preventDefault();


        //converts current time into a digital clock
        var curClock = new Date().toTimeString();
    //        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        console.log(curClock);

    //4. Allow the user to start the timer once those questions have been answered.    
        //checks if all inputs are complete
        $('.startTimer').click(function(){
            if(!numberOfSets || !setLength || !restLength){
                $('#clock').html("Please fill out all fields.");
            }
        }); //if/else inputs checkers

    //5. Allow the user to stop the timer at any time after it has started.
    //6. Visually count down each activity period and then each rest period.
   
    $('.startTimer').click(function(e){
        $(this).addClass("active");
//        $(this).removeClass("startTimer");
//        $(this).addClass("restTimer");
        
        
        var looperArray = [];  
        
         for (let i = 0; i < numberOfSets; i++){
            looperArray.push(i);
             
             
            (function looperFunction() { 
            
            $('#stop').click(function(){
                restFunc();
            });  

            //start timer
            var timer = null, 
                interval = 1000,
                sec = setLength;
                    if (timer !== null) return;
                    function clock (val) {return val > 9 ? val : "0" + val;}
                    timer = setInterval(function(){
                        $("#seconds").html(clock(--sec%60));
//                        $("#counter").html(looperArray[i]);  
                         if(sec === 0){
                            clearInterval(timer);
                            restFunc();
                            $('#seconds').html('--');
                         } else {
                            $('#stop').click(function(){
                                clearInterval(timer);
                                $('#seconds').html('--');
                            });   
                         } //if
                     }, interval);
                    //timer

                //rest timer
                var restVariable = null, 
                    restInterval = 1000,
                    restSec = restLength;
                function restFunc () {   
                    function restClock (val) {return val > 9 ? val : "0" + val;}
                    if (restVariable !== null) return;    
                    var restTimer = setInterval(function(){
                        $("#restSeconds").html(restClock(--restSec%60));   $("#restCounter").html(restClock(parseInt(restSec/restLength, 10)));
                         if(restSec === 0){
                            clearInterval(restTimer);
                            $('#restSeconds').html('--');
                            looperFunction(); 
                         } //if
                    }, restInterval);
                    clock(); 
                    }; //restTimer

                }) (); // IIFE looperFunction 
             
            console.log(i);
        }; //for loop
        
        console.log(looperArray);     
       });// start tabata click event 
        
    }); //submit event
    
}); //document.ready 




