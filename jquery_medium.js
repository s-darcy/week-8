//$('#submit').click(function(){
//    $('#contactForm').validate({
//        invalidHandler: function(event, validator) {
//            // 'this' refers to the form
//            var errors = validator.numberOfInvalids();
//            if (errors) {
//              var message = errors == 1
//                ? 'You missed 1 field. It has been highlighted'
//                : 'You missed ' + errors + ' fields. They have been highlighted';
//              $("div.error span").html(message);
//              $("div.error").show();
//            } else {
//              $("div.error").hide();
//            }//if statement
//          }//invalidHanadler
//        
//    });//validate function
//});//click event



$('#contactForm').submit(function(e){
    e.preventDefault();
    console.log($('#contactForm').validate());
});