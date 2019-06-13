$( document ).ready(function() {
  
  $( ".p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12" ).mouseenter(function() {
  	$( this ).addClass("active");
	});

    $( ".p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12" ).click(function() {
  	$( this ).removeClass("active");
	});

});