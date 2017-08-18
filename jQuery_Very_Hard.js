$(document).ready(function(){
    var numberOfSets, setLength, restLength;
    
    $('#tabataTimer').submit(function(event){
        numberOfSets = $('#numberOfSets').val();
        setLength = $('#setLength').val();
        restLength = $('#restLength').val();
        event.preventDefault();
    });
});    


var startClock = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

console.log(startClock);

$('#startTimer').click(function(){
    $('#clock').html(startClock);
});

//var endClock = now - startClock;





//    setInterval(function(){
//            var set = (parseInt($("#set").val(), 10))*1000;
//            console.log(set);
//        }, 20000);
//    });
//});


// Find the distance between now an the count down date
//var countDown = end - startClock;
//
//var seconds = Math.floor((countDown % (1000 * 60)) / 1000);
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