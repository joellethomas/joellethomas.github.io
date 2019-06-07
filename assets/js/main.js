$( document ).ready(function() {
  
  $( ".p1, .p2, .p3, .p4, .p5" ).mouseenter(function() {
  	$( this ).addClass("active");
	});

    $( ".p1, .p2, .p3, .p4, .p5" ).click(function() {
  	$( this ).removeClass("active");
	});

});