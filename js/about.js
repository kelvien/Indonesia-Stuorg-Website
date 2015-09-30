//WHATCHU LOOKIN AT MY FRIEND? Ask me if you have question instead..

$(window).load(function() {
	var wow = new WOW(
	  {
	    boxClass: 'wow',      
	    animateClass: 'animated', 
	    offset: 0,
	    mobile: true      
	  }
	);
	wow.init();

	$("#navigator").affix({
	    offset: { 
	        top: $("#aboutUs").offset().top-$(".navbar-fixed-top").height()
	    }
	});

	$(window).resize(function(){
		$("#navigator").affix({
		    offset: { 
		        top: function(){ return (this.top = $("#aboutUs").offset().top)-$(".navbar-fixed-top").height() }
		    }
		});
	});	

	$("#contactUsForm").on("submit", function(e){
  	e.preventDefault();
  	var button = $(this).find("button");
  	button.button("loading");
  	var data = {
  				type: $("input[name='type_contactUs']").val(),
		   		name: $("input[name='name_contactUs']").val(),
		   		email: $("input[name='email_contactUs']").val(),
		   		text: $("textarea[name='text_contactUs']").val(),
		   	};
  	$.ajax({
        type     : "POST",
        url      : "php/contact.php",
        data	 : data,
        success  : function(data) {
            if(data == "success"){
            	$("#response_contactUs").removeClass("error_text");
            	$("#response_contactUs").addClass("success_text");
            	$("#response_contactUs").html("<span class='fa fa-check'></span> Sent! We will get back to you soon :)");
            	$("form#contactUsForm").hide();
            }
            else{
            	button.button("reset");
            	$("#response_contactUs").removeClass("success_text");
            	$("#response_contactUs").addClass("error_text");
            	$("#response_contactUs").html("<span class='fa fa-exclamation-circle'></span> Please fill in all information and try again");
            }
        }
    });
  });

});

function toggleEmail(elem){
		if($("#"+elem).is(":visible")){
			$("#"+elem).hide("fast");
		}
		else{
			$("#"+elem).show("fast");
		}
}