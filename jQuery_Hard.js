$(document).ready(function(){
    $('.titleTag').attr('target', '_blank');
    $('.titleTag').each(function(){
        var href = $(this).attr('href');
        $(this).prop('title', href);
    });//.each function           
});//document .ready
