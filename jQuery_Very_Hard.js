$(document).ready(function(){
   var numberOfSets, setLength, restLength, clock, timer, restClock, restTimer;
    
    
    //retrieves and store input values
    $('#tabataTimer').submit(function(event){
        numberOfSets = parseInt($('#numberOfSets').val());
        setLength = parseInt($('#setLength').val());
        restLength = parseInt($('#restLength').val());
        event.preventDefault();


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
    //6. Visually count down each activity period and then each rest period.
   
    $('.startTimer').click(function(){
        $(this).addClass("active");
//        $(this).removeClass("startTimer");
//        $(this).addClass("restTimer");  
      
        $('#stop').click(function(){
            restClock();
        });  
        
        //start timer
        var timer = null, 
            interval = 1000,
            sec = setLength;
        var sets = [];
        var i = 0;
        console.log(sets);    
      
                if (timer !== null) return;
                function clock (val) {return val > 9 ? val : "0" + val;}
                timer = setInterval(function(){
                    $("#seconds").html(clock(--sec%60));
                    $("#counter").html(sets[i]);  
                     if(sec === 0){
                        clearInterval(timer);
                        restClock();
                        $('#seconds').html('--');
                        for ( i = 0; sets[i] < numberOfSets; i++){
                            sets.push(i);
                            console.log(i);
                            
                            } // for function
                         
                     } else {
                         
                        $('#stop').click(function(){
                            clearInterval(timer);
                            $('#seconds').html('--');
                        });   
                     } //if
                    
                 }, interval);
                //timer
                console.log(sec);
                
            //rest timer
            var restVariable = null, 
                restInterval = 1000,
                restSec = restLength;
            var restSets = [];
            var x = 0;
            function restClock () {   
            function restClock (val) {return val > 9 ? val : "0" + val;}

            if (restVariable !== null) return;    
            var restTimer = setInterval(function(){
                $("#restSeconds").html(restClock(--restSec%60));
                $("#restCounter").html(restClock(parseInt(restSec/restLength, 10)));
                 if(restSec === 0){
                    clearInterval(restTimer);
                    restVariable = null;
                    $('#restSeconds').html('--');  
                    clock();
                    for ( x = 0; restSets[x] < numberOfSets; x++){
                            restSets.push(x);
                            console.log(x);
                            
                            } // for function 
                }
            }, restInterval);
               
            console.log(restSec);
            return restClock();    
            };
       });// start tabata click event

    }); //submit event
}); //document.ready 




