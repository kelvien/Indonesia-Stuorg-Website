//WHATCHU LOOKIN AT MY FRIEND? Ask me if you have question instead..

$(document).ready(function(){
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    }); 
});

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
	        top: this.top = $("#help_main").offset().top-$(".navbar-fixed-top").height()
	    }
	});

  /*since we have nav, we need to make margin on Congratulations / TOP part*/
  var paddingTop = $(".navbar-fixed-top").height() + "px";
  $("#congratulations").css("padding-top", paddingTop);

	$("#checkbox").affix({
		offset: { 
	        top: function(){ 
	        	return (this.top = $("#help_main").offset().top)
	        }
	    }
	});

	$("body").scrollspy({
		offset: $("#help_main").offset().top
	});

	$(window).resize(function(){
		$("#navigator").affix({
		    offset: { 
		        top: function(){ return (this.top = $("#help_main").offset().top)-$(".navbar-fixed-top").height() }
		    }
		});
	});	

	$(window).scroll(function() {
		$("#checkbox>li").each(function(index, value){
			if($(this).attr("class") == "active"){
				return false;
			}
			else{
				$(this).addClass("active");
			}
		});
	});

	$("#transportationForm").on("submit", function(e){
  	e.preventDefault();
  	var button = $(this).find("button");
  	button.button("loading");
  	var data = {
  				type: $("input[name='type_transportation']").val(),
		   		name: $("input[name='name_transportation']").val(),
		   		email: $("input[name='email_transportation']").val(),
		   		text: $("textarea[name='text_transportation']").val(),
		   	};
  	$.ajax({
        type     : "POST",
        url      : "php/contact.php",
        data	 : data,
        success  : function(data) {
            if(data == "success"){
            	$("#response_transportation").removeClass("error_text");
            	$("#response_transportation").addClass("success_text");
            	$("#response_transportation").html("<span class='fa fa-check'></span> Sent! <img src='media/officer/jtkurnia.jpg' class='img-circle small_img'/> Joshua will get back to you soon :)");
            	$("form#transportationForm").hide();
            }
            else{
            	button.button("reset");
            	$("#response_transportation").removeClass("success_text");
            	$("#response_transportation").addClass("error_text");
            	$("#response_transportation").html("<span class='fa fa-exclamation-circle'></span> Please fill in all information and try again");
            }
        }
    });
  });

	$("#hostFamilyForm").on("submit", function(e){
  	e.preventDefault();
  	var button = $(this).find("button");
  	button.button("loading");
  	var data = {
  				type: $("input[name='type_hostFamily']").val(),
		   		name: $("input[name='name_hostFamily']").val(),
		   		email: $("input[name='email_hostFamily']").val(),
		   		text: $("textarea[name='text_hostFamily']").val(),
		   	};
  	$.ajax({
        type     : "POST",
        url      : "php/contact.php",
        data	 : data,
        success  : function(data) {
            if(data == "success"){
            	$("#response_Al").removeClass("error_text");
            	$("#response_Al").addClass("success_text");
            	$("#response_Al").html("<span class='fa fa-check'></span> Sent! Al and Elaine will get back to you soon :)");
            	$("form#hostFamilyForm").hide();
            }
            else{
            	button.button("reset");
            	$("#response_Al").removeClass("success_text");
            	$("#response_Al").addClass("error_text");
            	$("#response_Al").html("<span class='fa fa-exclamation-circle'></span> Please fill in all information and try again");
            }
        }
    });
  });

$("#lifeForm").on("submit", function(e){
  	e.preventDefault();
  	var button = $(this).find("button");
  	button.button("loading");
  	var data = {
  				type: $("input[name='type_life']").val(),
		   		name: $("input[name='name_life']").val(),
		   		email: $("input[name='email_life']").val(),
		   		text: $("textarea[name='text_life']").val(),
		   	};
  	$.ajax({
        type     : "POST",
        url      : "php/contact.php",
        data	 : data,
        success  : function(data) {
            if(data == "success"){
            	$("#response_life").removeClass("error_text");
            	$("#response_life").addClass("success_text");
            	$("#response_life").html("<span class='fa fa-check'></span> Sent! <img src='media/officer/seraphtw.jpg' class='img-circle small_img' /> Serafim will get back to you soon :)");
            	$("form#lifeForm").hide();
            }
            else{
            	button.button("reset");
            	$("#response_life").removeClass("success_text");
            	$("#response_life").addClass("error_text");
            	$("#response_life").html("<span class='fa fa-exclamation-circle'></span> Please fill in all information and try again");
            }
        }
    });
  });

  $("#mudikaForm").on("submit", function(e){
    e.preventDefault();
    var button = $(this).find("button");
    button.button("loading");
    var data = {
          type: $("input[name='type_mudika']").val(),
          name: $("input[name='name_mudika']").val(),
          email: $("input[name='email_mudika']").val(),
          text: $("textarea[name='text_mudika']").val(),
        };
    $.ajax({
        type     : "POST",
        url      : "php/contact.php",
        data   : data,
        success  : function(data) {
            if(data == "success"){
              $("#response_mudika").removeClass("error_text");
              $("#response_mudika").addClass("success_text");
              $("#response_mudika").html("<span class='fa fa-check'></span> Sent! <img src='media/officer/lgunawan.jpg' class='img-circle small_img' /> Natasha will get back to you soon :)");
              $("form#mudikaForm").hide();
            }
            else{
              button.button("reset");
              $("#response_mudika").removeClass("success_text");
              $("#response_mudika").addClass("error_text");
              $("#response_mudika").html("<span class='fa fa-exclamation-circle'></span> Please fill in all information and try again");
            }
        }
    });
  });

	$("#questionOrDoubtForm").on("submit", function(e){
  	e.preventDefault();
  	var button = $(this).find("button");
  	button.button("loading");
  	var data = {
  				type: $("input[name='type_questionOrDoubt']").val(),
		   		name: $("input[name='name_questionOrDoubt']").val(),
		   		email: $("input[name='email_questionOrDoubt']").val(),
		   		text: $("textarea[name='text_questionOrDoubt']").val(),
		   	};
  	$.ajax({
        type     : "POST",
        url      : "php/contact.php",
        data	 : data,
        success  : function(data) {
            if(data == "success"){
            	$("#response_questionOrDoubt").removeClass("error_text");
            	$("#response_questionOrDoubt").addClass("success_text");
            	$("#response_questionOrDoubt").html("<span class='fa fa-check'></span> Sent! We will get back to you soon :)");
            	$("form#questionOrDoubtForm").hide();
            }
            else{
            	button.button("reset");
            	$("#response_questionOrDoubt").removeClass("success_text");
            	$("#response_questionOrDoubt").addClass("error_text");
            	$("#response_questionOrDoubt").html("<span class='fa fa-exclamation-circle'></span> Please fill in all information and try again");
            }
        }
    });
  });

});