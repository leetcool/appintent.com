$(document).ready(function() {

    // $('#counter1').countTo();
	
    $('#divQuestions .questions').first().show();

    var numItems = $('#divQuestions .questions').length;
    $("#divQuestions .answer" ).click(function( event ) {
    event.preventDefault();
    $(this).parent('.questions').hide();
    if ($(this).parent().next('.questions').length) {
        $(this).parent().next('.questions').fadeIn(); 
    } 
    else {
        checkother(); 
    }
    });

    var intervalup = setInterval( function() {
        var numbercount = parseInt($('#counter1').text());
        sumb = numbercount - 1;
        if(sumb != 0){
            $('#counter1').html(sumb);
        }else{
            $('#counter1').html(sumb);
            clearInterval(intervalup);
        }
    }, 1000 );


});
function checkother(){
	setTimeout(function() {
      	$("#divQuestions").hide()
        $("#analyzing").show();
        setTimeout(function() {
		$("#analyzing").hide();
		$("#congratulation").show();
	
        }, 1500);
	}, 0);
	
}


