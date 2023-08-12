$(function(){
    $("input").blur(function(){
        if($(this).val()==""){
            $(this).css('border','solid 1px red');
            alert("you didn't enter Name:");
        }
        else{
            $(this).css('border','solid 1px black');
        }
    })
    $("#navbarShow").delay(1000).slideDown().delay(3000).fadeOut();
    
    $("textarea").blur(function(){
        if($(this).val()==""){
            $(this).css('border','solid 1px red');
            alert("you didn't enter Message:");
        }
        else{
            $(this).css('border','solid 1px black');
        }
    })
    $("#submit").click(function(){
        var Message= $('#message').val();
        
    })
})